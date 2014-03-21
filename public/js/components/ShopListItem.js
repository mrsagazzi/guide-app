/** @jsx React.DOM */
var ReactAsync  = require('react-async');
var Link = require('react-router-component').Link;

module.exports = function (React, client) {
  return React.createClass({
    render: function() {
      var fields = this.props.entry.fields;
      var image = fields.pictures.length ? fields.pictures[0].fields.file.url: undefined;
      var shopUrl = '/shop/'+ this.props.entry.sys.id;
      return (
        <div>
         <h1>{fields.name}</h1>
         <p>{fields.type}</p>
         <Link href={shopUrl}>
           <img src={image} width="100" />
         </Link>
        </div>
      );
    }
  });
};
