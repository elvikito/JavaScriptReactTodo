var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = require('./item.js');

var ListFinish = React.createClass({
    render: function(){
        var divStyle = {
            paddingTop: 4,
        };
        var textDecoration={
            textDecorationLine: 'line-through',
            textDecorationColor: '#71bc74',
            color: "#71bc74",
        };
        var self = this;
        var ite = function(itemText){
            if(itemText.props.complete){   
                return (
                        <ListItem key={itemText.key}>
                            <form>
                             <div className="checkbox">
                                <label style={divStyle}>
                                    <input type="checkbox" checked={itemText.props.complete}
                                        onChange={self.handleChangeChk.bind(self, itemText)} value={itemText.props.value} />
                                </label>
                                        <span style={textDecoration}>{itemText}</span>
                             </div>
                            </form>
                        </ListItem>
                );
            }
        }
        return <ul className="list-group">{this.props.items.map(ite)}</ul>;
    },
    handleChangeChk: function(item){
        this.props.checkItem(item);
    }  
})

module.exports = ListFinish;
