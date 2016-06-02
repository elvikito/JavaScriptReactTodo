 
var Form = React.createClass({
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
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
                <input type='submit' value='Add'/>
            </form>
        );
    }
}); 

