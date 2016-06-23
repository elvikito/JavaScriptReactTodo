var React = require('react');
var ReactDOM = require('react-dom');
//(React as any).__spread = Object.assign;

var ListItem = require('./item.js');

var ListInit = React.createClass({displayName: "ListInit",
    render: function(){
        var self = this;
        var createItem = function(itemText, index){
            if(!itemText.props.complete){
                return (
                    React.createElement(ListItem, {key: index}, 
                        React.createElement("form", null, 
                         React.createElement("div", {className: "checkbox"}, 
                            React.createElement("label", null, 
                                React.createElement("input", {type: "checkbox", checked: itemText.props.complete, 
                                    onChange: self.handleChangeChk.bind(self, itemText), value: itemText.props.value})
                            ), 
                                    React.createElement("span", {onClick: self.onEdit.bind(self, itemText)}, itemText), 
                                    React.createElement("a", {href: "#", onClick: self.onDelete.bind(self, itemText), className: "glyphicon glyphicon-remove"})
                         )
                        )
                    )
                );
            }
        }
        return React.createElement("ul", {className: "list-group"}, this.props.items.map(createItem));
    },
    onDelete: function(item){
        this.props.deleteItem(item);
    },
    onEdit: function(item){
        this.props.editItem(item);
    },
    handleChangeChk: function(item){
        this.props.checkItem(item);
    }  
})

module.exports = ListInit;
