/** @jsx React.DOM */
var React = require('react');
var ReactMount  = require('react/lib/ReactMount');
ReactMount.allowFullPageRender = true;
var Router = require('react-router-component');
var Pages = Router.Pages;
var Page = Router.Page;

module.exports = function (client) {

  var MainPage = require('./components/MainPage')(React, client);

  var App = React.createClass({
    render: function() {
      return (
        <html>
          <head>
            <script src="/js/main.js"></script>
          </head>
          <body>
            <Pages className="App" path={this.props.path}>
              <Page path="/" handler={MainPage} />
            </Pages>
          </body>
        </html>
      )
    }
  });

  if (process.browser) {
    window.onload = function() {
      React.renderComponent(App(), document);
    }
  }

  return App;
};
