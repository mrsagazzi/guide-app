/** @jsx React.DOM */
var ReactAsync  = require('react-async');
module.exports = function (React, client) {

  return React.createClass({
    render: function() {
      return (
        <div className="ShopDetailPage">
          {this.props.shopid}
        </div>
      );
    }
  });
};
