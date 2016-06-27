var React = require('react');
var ReactDOM = require('react-dom');


var ListItem = React.createClass({
    render: function(){
        var divStyle = {
            background: "#f2f2f2",
            marginTop: 6,
            paddingBottom: 0,
            paddingTop: 0,
        };
        return ( 
            <li className="list-group-item"style={divStyle}>{this.props.children}</li>
        );
    }
});


module.exports = ListItem;
