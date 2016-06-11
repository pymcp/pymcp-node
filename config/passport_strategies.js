var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var mongo = require('../models/mongo');
var nconf = require('nconf');

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  mongo.User.findById(id, function(err, user) {
    cb(err, user);
  });
});

passport.use(new FacebookStrategy({
    clientID: nconf.get("facebook:clientID"),
    clientSecret: nconf.get("facebook:clientSecret"),
    callbackURL: nconf.get("facebook:callbackURL"),
  },
  function(accessToken, refreshToken, profile, cb) {
    process.nextTick(function() {
      mongo.User.findOne({'facebook.id': profile.id}, function(err, user) {
        if (err) {
          throw err;
        } else if (user) {
          user.facebook.token = refreshToken;
          user.facebook.name = profile.displayName
          return cb(null, user);
        } else {
          var newUser = new mongo.User();
          newUser.facebook.id = profile.id;
          newUser.facebook.token = refreshToken;
          newUser.facebook.name = profile.displayName;
          newUser.save(function(err) {
            if (err) {
              throw err;
            } else {
              return cb(newUser);
            }
          });
        }
      });
    });
  }
));
