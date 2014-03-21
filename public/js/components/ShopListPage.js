/** @jsx React.DOM */
var ReactAsync  = require('react-async');
module.exports = function (React, client) {
  var ShopListItem = require('./ShopListItem')(React, client);

  return React.createClass({
    mixins: [ReactAsync.Mixin],

    getInitialStateAsync: function (cb) {
      client.entries().then(function (data) {
        console.log(data);
        cb(null, {
          entries: data,
          total: data.total
        });
      });
    },

    render: function() {
      var shops = this.state ? this.state.entries.map(function (entry) {
        return <ShopListItem key={entry.sys.id} entry={entry} />;
      }) : [];

      return (
        <div className="ShopListPage">
          <p>Shop list</p>
          {shops}
          <p>{this.state.total} shops</p>
          <button onClick={this.update}>Update</button>
        </div>
      );
    }
  });
};
