const express = require('express');
const customer = express();
const { index, show, store, destroy, update } = require('../../controllers/API/CustomerController');

customer.get('/', index);
customer.get('/:id', show);
customer.post('/', store);
customer.delete('/:id', destroy);
customer.put('/:id', update)

module.exports = customer