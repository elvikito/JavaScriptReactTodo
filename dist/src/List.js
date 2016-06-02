var List = React.createClass({displayName: "List",
    render: function(){
        var createItem = function(itemText){
            return ( 
                React.createElement(ListItem, null, itemText)
            );
        }
        return React.createElement("ul", null, this.props.items.map(createItem));
    }
});
