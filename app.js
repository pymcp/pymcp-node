var app = require('express')();
var http = require('http').Server(app);
var mongodb = require('mongodb');

mongodb.MongoClient.connect('mongodb://pymcp:jE71sQjC7S77iCGeEvWsEdL@localhost/pymcp', function(err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});
