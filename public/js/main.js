var React = require('react');
var config;
// Enables usage of React dev tools
window.React = React;
config = window.contentfulConfig;
var contentful = require('contentful');

var client = contentful.createClient(config);
window.client = client;

// Initialize the top level React component on the client
var App = require('./App')(client, config);
