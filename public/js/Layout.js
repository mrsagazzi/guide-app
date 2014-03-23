/** @jsx React.DOM */
var Link = require('react-router-component').Link;
module.exports = function (React, client) {
  return React.createClass({
    renderChildren: function () {
    },

    render: function() {
      return (
        <div>
          <nav>
            <ul>
              <li>
                 <Link href="/">Guide</Link>
              </li>
            </ul>
          </nav>
          <main>{this.props.children}</main>
        </div>
      );
    }
  });
};
