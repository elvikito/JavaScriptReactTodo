var React = require('react');
var ReactDOM = require('react-dom');
var ToggleDisplay = require('react-toggle-display');
var firebase = require("firebase/app");
  require("firebase/auth");
  require("firebase/database");


var ListInit = require('./list_init.js');
var ListFinish = require('./list_finish.js');
var Form = require('./form.js');
var Banner = require('./banner.js');

var config = {
        apiKey: "AIzaSyBFbmt7YgRDsGhqCdFtUqDm65SXJNx6ZW8",
        authDomain: "under-db337.firebaseapp.com",
        databaseURL: "https://under-db337.firebaseio.com",
        storageBucket: "under-db337.appspot.com",
};
firebase.initializeApp(config);
//hello world
//
var HelloMessage = React.createClass({displayName: "HelloMessage",
    proTypes:{
        title:React.PropTypes.string.isRequired
    },
    getDefaultProps: function(){
        return {
            title: "ToDoList",
            text : "The Example To Do is enough for some people. Others prefer to use programs. websites (thin app)"
        }
    },
    render: function() {
        return (
            React.createElement("div", {className: "jumbotron"}, 
                React.createElement("h2", null, this.props.title), 
                React.createElement("p", null, this.props.text), 
                React.createElement("p", null, React.createElement("a", {onClick: this.onClick.bind(this, "HI"), className: "btn btn-primary btn-lg", href: "#", role: "button"}, " Alert")), 
                React.createElement(Componentetwo, {text: this.props.text})
            )
        );  // Display a property.
    },
    onClick: function(e){
        alert(e)
    }
});

var Componentetwo = React.createClass({displayName: "Componentetwo",
    render: function(){
        return(
            React.createElement("div", null, this.props.text)        
        );
    }
});

/*var App = React.createClass({*/
    //getInitialState: function() {
        //return {
            //text: '',
            //isEdit: 0,
            //items:[]
        //};
    //},
    //componentWillMount: function(){
          //this.firebaseRef = firebase.database().ref('items');
          //this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
          //var items = [];
          //dataSnapshot.forEach(function(childSnapshot) {
            //var item = childSnapshot.val();
            //item['key'] = childSnapshot.key;
            //items.push(item);
          //}.bind(this));

          //this.setState({
            //items: items
          //});
        //}.bind(this));
    //},
    //componentWillUnmount: function() {
        //this.firebaseRef.off();
    //},
    //updateItems: function(text){ 
        //var newItem = {
            //id : this.state.items.length +1,
            //text: text,
            //complete: false
        //}
        //this.firebaseRef.push(newItem);
        //this.setState({items: this.state.items.concat(newItem)}); 
        //this.setState({text: ''});
    //},
    //render: function() {
        //if (this.state.items) {
            //var items = this.state.items.map(function(item){
                //if(item.complete==="true"){
                    //return(<span key={item.id} complete={item.complete} value={item.text} id={item.id}>
                        //{item.text}
                       //</span>)
                //}
                //else{
                    //return(<span key={item.id} complete={item.complete} value={item.text} id={item.id}>
                        //{item.text}
                    //</span>)
                //}
            //})
        //}
        //return (
            //<div>
                //<Banner />
                //<Form 
                    //changeText={this.handleTextChange}
                    //text={this.state.text} 
                    //isEdit={this.state.isEdit}
                    //onUpdateItem={this.handleUpdate}
                    //onFormSubmit={this.updateItems}
                ///>
                //<div>New
                    //<ListInit
                        //items={items}
                        //editItem={this.ItemsEdit}
                        //deleteItem={this.ItemsDelete}
                        //checkItem={this.linkCheckbox}
                    ///>
                //</div>
                //<div>finished
                    //<ListFinish
                        //items={items}
                        //checkItem={this.linkCheckbox}
                    ///>
                //</div>

            //</div>
        //)
    //},
    //handleTextChange: function(text){
        //this.setState({text: text});
    //},
    //ItemsEdit: function(item){
        //this.setState({text: item.props.children, isEdit: item.key});
    //},
    //handleUpdate: function(item){
        //var items = this.state.items;
        //for(var i = 0; i < items.length; i++){
            //if(items[i].id == item.id){
                //this.firebaseRef.child(items[i].key).update({text: item.text, id: item.id, complete: item.complete});
                //items.splice(i, 1);
            //}
        //}
        //items.push(item);
        //this.setState({items : items});
    //},
    //ItemsDelete: function(item){
        //var key = item.props.id;
        //var items = this.state.items;
        //for(var i = 0; i < items.length; i++){
            //if(items[i].id == item.key){
                //this.firebaseRef.child(items[i].key).remove();
                //items.splice(i, 1);
            //}
        //}
        //this.setState({items : items});
    //},
    //changeCheckForId: function(d,id) {
        //var items = this.state.items;
        //var newData = {id: d.props.id, text: d.props.children, complete: !d.props.complete}
        //for(var i = 0; i < items.length; i++){
            //if(items[i].id == id){
                //this.firebaseRef.child(items[i].key).update(newData);
                //items.splice(i, 1);
            //}
        //}
        //items.push(newData);
        //this.setState({items : items});
    //},
    //linkCheckbox: function(d){
        //this.changeCheckForId(d,d.props.id);
    //}
//});
    
/*ReactDOM.render(<App title="ToDoList" />,*/
  /*document.getElementById('main'));*/

ReactDOM.render(React.createElement(HelloMessage, null), document.getElementById('main'));
