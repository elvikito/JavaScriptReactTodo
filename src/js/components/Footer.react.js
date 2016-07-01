var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Footer = React.createClass({

    render: function(){
        return(
            <div className="row">
              <div className="col-xs-12 col-md-10 box-a">
              <p>Mi nombre es elvis ramirez, soy un desarrollador web de Cochabamba, Bolivia.</p>
              <p>Mi trabajo es mi pasión más grande. Me encanta desarrollar sitios web, cada día trato de descubrir nuevas formas de desarrollo y nuevas formas de mejorar mis habilidades: la codificación es mi vida!
              </p>
              </div>
            </div>
        )
    },
});

module.exports = Footer;
