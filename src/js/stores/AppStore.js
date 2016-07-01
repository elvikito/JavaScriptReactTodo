var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppApi = require('../utils/AppApi');

var _ = require('underscore');

var CHANGE_EVENT = 'change';

_items = [];

function create(text) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  _items[id] = {
    id: id,
    complete: false,
    text: text
  };
}

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    },
    getAll: function() {
        return _items;
    }
});
AppDispatcher.register(function(payload){
    var action = payload.action;
    console.log(payload);

    switch(action.actionType){
        case AppConstants.ADD_ITEM:
            console.log("data");
            text = action.item.trim();
            if (text !== '') {
                create(text);
                AppStore.emitChange();
            }
        break;
        
    }
    return true;
});
module.exports = AppStore;
