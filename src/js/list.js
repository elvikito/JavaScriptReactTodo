var React = require('react');
var ReactDOM = require('react-dom');
//(React as any).__spread = Object.assign;

var ListItem = require('./item.js');

var List = React.createClass({
    render: function(){
        var self = this;
        var createItem = function(itemText){
            return (
                <ListItem key={itemText.key}>
                    <span onClick={self.onEdit.bind(self, itemText)}>{itemText}</span>
                    <a href="#" onClick={self.onDelete.bind(self, itemText)} className="glyphicon glyphicon-remove"></a>
                </ListItem>
            );
        }
        return <ul className="list-group">{this.props.items.map(createItem)}</ul>;
    },
    onDelete: function(item){
        this.props.deleteItem(item);
    },
    onEdit: function(item){
        this.props.editItem(item);
    }
})

module.exports = List;