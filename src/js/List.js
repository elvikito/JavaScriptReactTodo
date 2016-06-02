var List = React.createClass({
    render: function(){
        var createItem = function(itemText){
            return ( 
                <ListItem>{itemText}</ListItem>
            );
        }
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});
