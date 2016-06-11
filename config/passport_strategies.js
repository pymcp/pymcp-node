var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var mongo = require('../models/mongo');
var nconf = require('nconf');

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.use(new FacebookStrategy({
    clientID: nconf.get("facebook:clientID"),
    clientSecret: nconf.get("facebook:clientSecret"),
    callbackURL: nconf.get("facebook:callbackURL"),
  },
  function(accessToken, refreshToken, profile, cb) {
    process.nextTick(function() {
      mongo.User.findOne({facebookId: profile.id}, function(err, user) {
        if (err) {
          throw err;
        } else if (user) {
          return cb(null, user);
        } else {
          var newUser = new mongo.User({
            facebookId: profile.id
          });
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
