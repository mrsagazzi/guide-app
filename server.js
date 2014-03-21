/*
var url = require('url')

function(req, res, next) {
  try {
    var path = url.parse(req.url).pathname
    var app = App({path: path})
    var markup = React.renderComponentToString(app)
    res.send(markup)
  } catch(err) {
    return next(err)
  }
}
*/

var express = require('express');
var app = express();
var path = require('path');

var Promise = require('bluebird');
var browserify = require('browserify-middleware');

browserify.settings({
  transform: [
    'reactify'
  ]
});

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/js/app.js', browserify('./public/js/app.js'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(3010);
