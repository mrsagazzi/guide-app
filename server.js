var express = require('express');
var app = express();
var path = require('path');
var url = require('url');
var browserify = require('browserify-middleware');

var ReactAsync  = require('react-async');
require('node-jsx').install();
var App = require('./public/js/app');

browserify.settings({
  transform: [
    'reactify'
  ]
});

app.set('views', path.join(__dirname, 'public'));
//app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use(function(req, res, next) {
  var path = url.parse(req.url).pathname;
  var app = App({path: path});
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      return next(err);
    }
    res.send(markup);
  });
});

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/js/main.js', browserify('./public/js/main.js'));

/*
app.get('/', function(req, res){
  res.render('index');
});
*/

app.listen(3010);
