var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
    proTypes:{
        title:React.PropTypes.string.isRequired
    },
    getDefaultProps: function(){
        return {
            title: "ToDoList",
            text : "The Example To Do is enough for some people. Others prefer to use programs. websites (thin app)"
        }
    },
    render: function() {
        return (
            <div className="jumbotron">
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        );  // Display a property.
    }
});
ReactDOM.render(<HelloMessage title="ToDoList" />,
  document.getElementById('main'));
