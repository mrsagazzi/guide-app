/** @jsx React.DOM */
var ReactAsync  = require('react-async');
module.exports = function (React, Layout, client) {

  return React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (cb) {
      client.entry(this.props.shopid).then(function (data) {
        console.log(data);
        cb(null, data.fields);
      });
    },

    render: function() {
      return (
        <Layout>
          <p>{this.state.name}</p>
          <p>{this.state.description}</p>
        </Layout>
      );
    }
  });
};
