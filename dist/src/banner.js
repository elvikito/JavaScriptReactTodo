var React = require('react');
var ReactDOM = require('react-dom');

var Banner = React.createClass({displayName: "Banner",
    render: function(){
        return (
            React.createElement("div", {className: "page-header"}, 
                React.createElement("h3", null, "Todo-Lits")
            )
        );
    }
});


module.exports = Banner;
