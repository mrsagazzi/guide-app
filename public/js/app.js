/** @jsx React.DOM */
var React = require('react');
window.React = React;
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;

var MainPage = require('./components/MainPage')();

var App = React.createClass({

  render: function() {
    return (
      <Locations>
        <Location path="/" handler={MainPage} />
      </Locations>
    )
  }
});

React.renderComponent(App(), document.getElementsByTagName('main')[0]);
