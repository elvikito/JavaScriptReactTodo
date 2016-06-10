var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({

    render: function(){
        var self = this;
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input className="form-control" type='text' ref='text' value={this.props.text} onChange={this.onChange}/>
                </div>
            </form>
        );
    },
    onChange: function(e){
        this.props.changeText(e.target.value);
    },
    onSubmit: function(e){
        console.log("text send");
        e.preventDefault();
        var text = this.refs.text.value.trim();
        if(!text){
            alert("please text");
            return;
        }
        console.log(this.props.isEdit);
        if(this.props.isEdit){
            var updateitem={
                id:this.props.isEdit,
                text:text
            }
            this.props.onUpdateItem(updateitem);
            console.log("is update");
        }else{
            console.log("is not edit");
            this.props.onFormSubmit(text);
        }
        this.refs.text.value = "";

    }

});

module.exports = Form;
