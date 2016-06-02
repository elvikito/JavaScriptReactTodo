var ListItem = React.createClass({displayName: "ListItem",
    render: function(){
        return ( 
            React.createElement("li", null, this.props.children)
        );
    }
}); 
