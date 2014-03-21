/** @jsx React.DOM */
var ReactAsync  = require('react-async');
module.exports = function (React, client) {
  var ShopListItem = require('./ShopListItem')(React, client);

  return React.createClass({
    getInitialState: function () {
      return {
        entries: [],
        total: 0
      };
    },

    update: function () {
      client.entries().then(function (data) {
        console.log(data);
        this.setState({
          entries: data,
          total: data.total
        });
      }.bind(this));
    },

    render: function() {
      var shops = this.state.entries.map(function (entry) {
        return <ShopListItem key={entry.sys.id} entry={entry} />;
      });

      return (
        <div>
          <p>Shop list</p>
          {shops}
          <p>{this.state.total} shops</p>
          <button onClick={this.update}>Update</button>
        </div>
      );
    }
  });
};
