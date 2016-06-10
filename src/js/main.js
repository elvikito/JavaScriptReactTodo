var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list.js');
var Form = require('./form.js');
var Banner = require('./banner.js');

//hello world
//
/*var HelloMessage = React.createClass({*/
    //proTypes:{
        //title:React.PropTypes.string.isRequired
    //},
    //getDefaultProps: function(){
        //return {
            //title: "ToDoList",
            //text : "The Example To Do is enough for some people. Others prefer to use programs. websites (thin app)"
        //}
    //},
    //render: function() {
        //return (
            //<div className="jumbotron">
                //<h2>{this.props.title}</h2>
                //<p>{this.props.text}</p>
                //<p><a onClick={this.onClick.bind(this, "HI")} className="btn btn-primary btn-lg" href="#" role="button"> Alert</a></p>
                //<Componentetwo text={this.props.text}/>
            //</div>
        //);  // Display a property.
    //},
    //onClick: function(e){
        //alert(e)
    //}
//});

//var Componentetwo = React.createClass({
    //render: function(){
        //return(
            //<div>{this.props.text}</div>        
        //);
    //}
/*});*/

var App = React.createClass({
    getInitialState: function() {
        return {
            text: '',
            isEdit: 0,
            items:[
                {
                    id: 1, 
                    text: 'run task',
                    complete: false 
                },
                {
                    id: 2,
                    text: 'debug task',
                    complete: true
                },
                {
                    id: 3,
                    text: 'console task',
                    complete: true
                }
            
            ]
        };
    },
    updateItems: function(text){ 
        console.log("onFormSubmit")
        var newItem = {
            id : this.state.items.length +1,
            text: text
        }
        this.setState({items: this.state.items.concat(newItem)}); 
    },
    render: function() {
        if (this.state.items) {
            var items = this.state.items.map(function(item){
                return  <span key={item.id} complete={item.complete}>{item.text}</span> 
            })
        }
        return (
            <div>
                <Banner />
                <Form 
                    changeText={this.handleTextChange}
                    text={this.state.text} 
                    isEdit={this.state.isEdit}
                    onUpdateItem={this.handleUpdate}
                    onFormSubmit={this.updateItems}
                />
                <List
                    items={items}
                    editItem={this.ItemsEdit}
                    deleteItem={this.ItemsDelete}
                    checkItem={this.ItemCheck}
                /> 
            </div>
        )
    },
    handleTextChange: function(text){
        this.setState({text: text});
    
    },
    ItemsEdit: function(event){
        this.setState({text: event.props.children, isEdit: event.key});
    },
    ItemCheck:function(item){
        console.log(item);
        var items = this.state.items;
        for(var i = 0; i < items.length; i++){
            if(items[i].id == item.key){
                console.log(items);
                //items.splice(i, 1);
            }
        }
        this.setState({items : items});
    },
    handleUpdate: function(item){
        var items = this.state.items;
        for(var i = 0; i < items.length; i++){
            if(items[i].id == item.id){
                items.splice(i, 1);
            }
        }
        items.push(item);
        this.setState({items : items});
    },
    ItemsDelete: function(item){
        var items = this.state.items;
        for(var i = 0; i < items.length; i++){
            if(items[i].id == item.key){
                console.log(item.key);
                items.splice(i, 1);
            }
        }
        this.setState({items : items});
    }
});
    
ReactDOM.render(<App title="ToDoList" />,
  document.getElementById('main'));
