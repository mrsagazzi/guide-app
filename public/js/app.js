/** @jsx React.DOM */
var React = require('react');
var ReactMount  = require('react/lib/ReactMount');
ReactMount.allowFullPageRender = true;
var Router = require('react-router-component');
var Pages = Router.Pages;
var Page = Router.Page;

module.exports = function (client, config) {
  config = 'window.contentfulConfig='+JSON.stringify(config);

  var MainPage = require('./components/MainPage')(React, client);

  var App = React.createClass({
    render: function() {
      console.log(process.browser, this.props);
      return (
        <html>
          <head>
            <script dangerouslySetInnerHTML={{__html: config}} />
            <script src="/js/main.js" />
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
      React.renderComponent(App({path: window.location.pathname + window.location.search}), document);
    }
  }

  return App;
};
