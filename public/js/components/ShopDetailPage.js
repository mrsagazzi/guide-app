/** @jsx React.DOM */
var ReactAsync  = require('react-async');
module.exports = function (React, client) {

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
        <div className="ShopDetailPage">
          <p>{this.state.name}</p>
          <p>{this.state.description}</p>
        </div>
      );
    }
  });
};
