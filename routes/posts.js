var express = require('express');
var mongo = require('../models/mongo');

var router = express.Router();

router.get('/', function(req, res, next) {
  mongo.Post.find(function(err, posts) {
    if (err) {
      res.status(500);
      res.json({status: 'error', message: error});
    } else {
      res.json(posts);
    }
  });
});

router.put('/', function(req, res, next) {
  var post = new mongo.Post({subject: req.body.subject, message: req.body.message});
  post.save(function(err) {
    if (err) {
      res.status(500);
      res.json({status: 'error', message: err}); 
    } else {
      res.json({status: 'ok'});
    }
  });
});

module.exports = router;
