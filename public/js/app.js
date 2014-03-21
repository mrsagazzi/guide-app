/** @jsx React.DOM */
var React = require('react');
var ReactMount  = require('react/lib/ReactMount');
ReactMount.allowFullPageRender = true;
var Router = require('react-router-component');
var Pages = Router.Pages;
var Page = Router.Page;
var App;

module.exports = function (client, config) {
  var ShopListPage = require('./components/ShopListPage')(React, client);
  var ShopDetailPage = require('./components/ShopDetailPage')(React, client);

  config = 'window.contentfulConfig='+JSON.stringify(config);

  App = React.createClass({
    render: function() {
      return (
        <html>
          <head>
            <script dangerouslySetInnerHTML={{__html: config}} />
            <script src="/js/main.js" />
          </head>
          <Pages className="App" path={this.props.path}>
            <Page path="/" handler={ShopListPage} />
            <Page path="/shop/:shopid" handler={ShopDetailPage} />
          </Pages>
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
