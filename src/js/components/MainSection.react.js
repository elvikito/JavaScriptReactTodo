var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MainSection = React.createClass({

    render: function(){
        return(
            <div className="row">
              <div className="col-xs-6 col-md-4 contr-r">
                <div className="mtop">HOME</div>
                <div>ABOUT</div>
                <div>CONTACT</div>
                <div className="ctop">twitter</div>
                <div>facebook</div>
                <div className="mycontent-right"></div>
              </div>
              <div className="col-xs-6 col-md-8 contr-c">
                <div>Elvis Ramirez Iriarte</div>
              </div>
            </div>
        )
    },
});

module.exports = MainSection;
