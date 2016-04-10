var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();

router.put('/', function(req, res, next) {
  mongodb.MongoClient.connect('mongodb://pymcp:jE71sQjC7S77iCGeEvWsEdL@localhost/pymcp', function(err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
      db.close();
    }
  })

  res.json({status: 'ok'});
});

module.exports = router;
