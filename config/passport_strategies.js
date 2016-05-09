var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var mongo = require('../models/mongo');
var nconf = require('nconf');

passport.use(new FacebookStrategy({
    clientID: nconf.get("facebook:clientID"),
    clientSecret: nconf.get("facebook:clientSecret"),
    callbackURL: nconf.get("facebook:callbackURL"),
  },
  function(accessToken, refreshToken, profile, cb) {
    mongo.User.findOrCreate({facbookId: profile.id}, function(err, user) {
      return cb(err, user);
    });
  }
));
