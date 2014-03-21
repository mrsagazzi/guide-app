var express = require('express');
var app = express();
var path = require('path');
var url = require('url');
var browserify = require('browserify-middleware');

var cheerio = require('cheerio');

var ReactAsync  = require('react-async');
require('node-jsx').install();

var contentful = require('contentful');
var config = require('./config.json');

var client = contentful.createClient({
  accessToken: config.accessToken,
  space: config.space 
});

browserify.settings({
  transform: [
    'reactify'
  ]
});

app.set('views', path.join(__dirname, 'public'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// Initialize the top level React component on the server
var App = require('./public/js/app')(client, config);

// Middleware which enables React.js server rendering,
// with some additional debugging features for data
app.use(function(req, res, next) {
  var path = url.parse(req.url).pathname;
  var app = App({path: path});
  ReactAsync.renderComponentToStringWithAsyncState(app, function(err, markup) {
    if (err) {
      return next(err);
    }
    var $ = cheerio.load(markup);
    var scripts = $('script');
    var stateScript = scripts.eq(scripts.length-1);
    var state = stateScript.text().replace('window.__reactAsyncStatePacket=', '');
    var formattedState = JSON.stringify(JSON.parse(state), null, '  ');
    // Uncomment this line to inject a formatted state. Helps debug weird data
    //stateScript.html('window.__reactAsyncStatePacket='+formattedState);
    // Uncomment the next two lines to print a formatted version of the state
    //$('body').append('<pre id="stateDebug" />');
    //$('#stateDebug').html(formattedState);

    res.send($.html());
  });
});

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/js/main.js', browserify('./public/js/main.js'));

app.listen(3010);
