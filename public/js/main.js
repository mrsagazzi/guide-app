var React = require('react');
var config;
if(process.browser){
  window.React = React;
  config = window.contentfulConfig;
}
var Router = require('react-router-component');

var contentful = require('contentful');

var client = contentful.createClient(config);

var App = require('./App')(client, config);
