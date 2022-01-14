const mongoose = require('mongoose');
const { Schema } = mongoose;


const roomSchema = new Schema({
   number: Number,
   price: Number,
   isReserved: { type: Boolean, default: false },
});

module.exports  = mongoose.model('Room', roomSchema)