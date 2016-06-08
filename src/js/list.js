var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = require('./item.js');

var List = React.createClass({
    render: function(){
        var self = this;
        var createItem = function(itemText){
            return (
                <ListItem key={itemText.key}>{itemText}<a onClick={self.onDelete.bind(self, itemText)} href="#"><span className="glyphicon glyphicon-remove"></span></a></ListItem>
            );
        }
        return <ul className="list-group">{this.props.items.map(createItem)}</ul>;
    },
    onDelete: function(item){
        this.props.deleteItem(item);
    }
})

module.exports = List;
