var React = require('react');
var ReactDOM = require('react-dom');


var ListItem = React.createClass({displayName: "ListItem",
    render: function(){
        var divStyle = {
            background: "#f2f2f2",
        };
        return ( 
            React.createElement("li", {className: "list-group-item", style: divStyle}, this.props.children)
        );
    }
});


module.exports = ListItem;
