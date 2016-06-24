var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/front/index');
var learn = require('./routes/front/learn');
var patches = require('./routes/front/patches');
var leaders = require('./routes/front/leaders');
var forum = require('./routes/front/forum');
var contact = require('./routes/front/contact');

var game = require('./routes/game/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/front/'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

// static libs
app.use(express.static(path.join(__dirname, '/')));

app.use('/', index);
app.use('/learn', learn);
app.use('/patches', patches);
app.use('/leaders', leaders);
app.use('/forum', forum);
app.use('/game', game);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('../error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('../error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
