var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = require('./item.js');

var ListFinish = React.createClass({displayName: "ListFinish",
    render: function(){
        var self = this;
        var ite = function(itemText){
            if(itemText.props.complete){   
                return (
                        React.createElement(ListItem, {key: itemText.key}, 
                            React.createElement("form", null, 
                             React.createElement("div", {className: "checkbox"}, 
                                React.createElement("label", null, 
                                    React.createElement("input", {type: "checkbox", checked: itemText.props.complete, 
                                        onChange: self.handleChangeChk.bind(self, itemText), value: itemText.props.value})
                                ), 
                                        React.createElement("span", null, itemText)
                             )
                            )
                        )
                );
            }
        }
        return React.createElement("ul", {className: "list-group"}, this.props.items.map(ite));
    },
    handleChangeChk: function(item){
        this.props.checkItem(item);
    }  
})

module.exports = ListFinish;
