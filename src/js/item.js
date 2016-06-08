var React = require('react');
var ReactDOM = require('react-dom');


var ListItem = React.createClass({
    render: function(){
        return ( 
            <li className="list-group-item">{this.props.children}</li>
        );
    }
});


module.exports = ListItem;
