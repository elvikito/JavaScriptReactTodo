var React = require('react');
var ReactDOM = require('react-dom');
       
var Banner = React.createClass({
 
    render: function(){
        var divStyle = {
          color: "#f2f2f2",
          marginTop: 6,
          marginLeft: 18,
        };
        return (
            <div className="page-header">
                <h3 style={divStyle}>Under-Lits</h3>
            </div>
        );
    }
});


module.exports = Banner;
