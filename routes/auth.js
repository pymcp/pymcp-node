var express = require('express');
var mongo = require('../models/mongo');
var passport = require('passport');

var router = express.Router();

router.get('/login', function(req, res) {
  res.json({'what': 'hello'});
});

router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback',
  passport.authenticate('facebook', {failureRedirect: '/auth/login'}),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
