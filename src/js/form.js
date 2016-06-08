var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({

    render: function(){
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" type='text' ref='text' onChange={this.onChange}/>
                </div>
            </form>
        );
    },
    onChange: function(){
        console.log("task")
    },
    onSubmit: function(e){
        console.log("text send");
        e.preventDefault();
        var text = this.refs.text.value.trim();
        if(!text){
            alert("please text");
            return;
        }
        this.props.onFormSubmit(text);
        this.refs.text.value = "";

    }

});

module.exports = Form;
