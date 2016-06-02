 
var Form = React.createClass({displayName: "Form",
    getInitialState: function() {
        return {
            item: ''
        };
    },
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ''});
        ReactDOM.findDOMNode(this.refs.item).focus();
        return;
    },
    onChange: function(e){
        this.setState({
            item: e.target.value
        });
    },
    render: function(){
        return (
            React.createElement("form", {onSubmit: this.handleSubmit}, 
                React.createElement("input", {type: "text", ref: "item", onChange: this.onChange, value: this.state.item}), 
                React.createElement("input", {type: "submit", value: "Add"})
            )
        );
    }
}); 

