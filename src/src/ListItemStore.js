var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var eventList = {};

//all stores need for list items are now stored here rather than in separate files

function addListItem(listItem) {
  eventList[listItem.id] = listItem;

  ListItemStore.emit('change');
}

function removeListItem(listItemId) {
  delete eventList[listItemId];

  ListItemStore.emit('change');
}

function removeAllListItems() {
  eventList = {};

  ListItemStore.emit('change');
}

var ListItemStore = objectAssign({}, EventEmitter.prototype, {

  getAllListItems: function () {
    return eventList;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }

});

function handleAction(action) {
  if (action.type === 'add_list_item') {
    addListItem(action.item);
  } else if (action.type === 'remove_list_item') {
    removeListItem(action.itemId);
  } else if (action.type === 'remove_all_list_items') {
    removeAllListItems();
  }
}

//handleAction in this file calls for the dispatcher
ListItemStore.dispatchToken = Dispatcher.register(handleAction);
