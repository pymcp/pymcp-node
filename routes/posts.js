var express = require('express');
var mongo = require('../models/mongo');

var router = express.Router();

router.put('/', function(req, res, next) {
  var post = new mongo.Post({subject: 'test', message: 'testing'});
  post.save(function(err) {
    if (err) {
      res.json({status: 'error', message: err}); 
    } else {
      res.json({status: 'ok'});
    }
  });
});

module.exports = router;
