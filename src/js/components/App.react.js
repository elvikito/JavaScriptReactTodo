var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var MainSection = require('./MainSection.react');
var Footer = require('./Footer.react');

function getState() {
  return {
    all: AppStore.getAll()
  };
}

var App = React.createClass({
    getInitialState: function() {
        return getState();
    },

    handleClick: function(){
        AppActions.addItem("example add item");
    },

    componentDidMount: function() {
      AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      AppStore.removeChangeListener(this._onChange);
    },

    render: function(){
        return(
            <div>
                <MainSection />
                <Footer />
            </div>
            //<div onClick={this.handleClick}>D{this.state.all}</div>
        )
    },
    _onChange: function() {
        this.setState(getState());
    }
});

module.exports = App;
