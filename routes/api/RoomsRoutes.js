const express = require('express');
const room = express();
const { index, show, store, destroy, update } = require('../../controllers/API/RoomsController');

room.get('/', index);
room.get('/:id', show);
room.post('/', store);
room.delete('/:id', destroy);
room.put('/:id', update)

module.exports = room