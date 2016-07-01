/**
 * TodoActions
 */
var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var AppConstants = require('../constants/AppConstants.js');

var AppActions = {
    addItem: function(item){
        AppDispatcher.handleViewAction({
                actionType:AppConstants.ADD_ITEM,
                item: item
        })
    }
 
};

module.exports = AppActions;
