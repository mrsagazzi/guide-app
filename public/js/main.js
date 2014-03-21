var React = require('react');
if(process.browser) window.React = React;
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var contentful = require('contentful');
var config = require('./config.json');

var client = contentful.createClient({
  accessToken: config.accessToken,
  space: config.space 
});

var App = require('./App')(client);
