/** @jsx React.DOM */
var ReactAsync  = require('react-async');
module.exports = function (React, client) {
  return React.createClass({

    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (cb) {
      client.space().then(function (data) {
        console.log(data);
        cb(null, {name: data.name});
      });
    },

    render: function() {
      return <div>Hello {this.state.name}</div>;
    }
  });
};
