var React = require('react');
var ReactDOM = require('react-dom');


var Form = React.createClass({

    render: function(){
        var divStyle = {
          marginTop: 6,
          marginLeft: 17,
          marginRight: 16,
        };
        var self = this;
        return (
            <form onSubmit={this.onSubmit} style={divStyle}>
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
        e.preventDefault();
        var text = this.refs.text.value.trim();
        if(!text){
            alert("please text");
            return;
        }
        if(this.props.isEdit){
            var updateitem={
                id:this.props.isEdit,
                text:text,
                complete: false
            }
            this.props.onUpdateItem(updateitem);
        }else{
            this.props.onFormSubmit(text);
        }
        this.refs.text.value = "";

    }

});

module.exports = Form;
