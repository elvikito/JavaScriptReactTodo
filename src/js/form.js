var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({

    render: function(){
        var self = this;
        console.log(self.props.text);
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" type='text' ref='text' value={this.props.text} onChange={this.onChange}/>
                </div>
            </form>
        );
    },
    onChange: function(e){
        console.log("data");
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
