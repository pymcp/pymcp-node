var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/new-post', function(req, res, next) {
  res.render('index', { title: 'home' });
});

router.get('/photo', function(req, res, next) {
  res.json({photo: req.user.portrait()});
});

module.exports = router;
