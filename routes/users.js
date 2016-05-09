var express = require('express');
var mongo = require('../models/mongo');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongo.User.find(function(err, users) {
    if (err) {
      res.status(500);
      res.json({status: 'error', message: error});
    } else {
      res.json(users);
    }
  });
});

module.exports = router;
