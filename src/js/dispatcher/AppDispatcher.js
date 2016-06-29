//requiere flux
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

// Create dispatcher instance

// Convenience method to handle dispatch requests
var AppDispatcher = assign(new Dispatcher(), {
    handleViewAction: function(action) {
        var payload = {
            source: 'VIEW_ACTION',
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;
