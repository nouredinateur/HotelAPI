const mongoose = require('mongoose');
const { Schema } = mongoose;


const customerSchema = new Schema({
    name: String,
    phone:   Number,
    email: String,
    address:   String,
    role: {
        type: String,
        default: "customer"
    },
    roomID: String,
});

module.exports  = mongoose.model('Customer', customerSchema)