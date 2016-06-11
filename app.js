var express = require('express');
var session = require('express-session')
var MongoStore = require('connect-mongo/es5')(session);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var passport = require('passport');
var flash = require('connect-flash');

// Initialize configuration
var config = require('./config/');
var mongoose = require('mongoose');
mongoose.connect(nconf.get('mongo:uri'));

var auth = require('./routes/auth');
var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.configure
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: nconf.get('secret'),
  maxAge: new Date(Date.now() + 3600000),
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }, function(err) {
    if (err) {
      console.log(err);
    }
  })
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);
app.use('/posts', posts);
app.use('/auth', auth);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(req.url + ' Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var http = require('http').Server(app)
http.listen(nconf.get('http:port'), function() {
    console.log('listening on *:' + nconf.get('http:port'));
});

module.exports = app;
