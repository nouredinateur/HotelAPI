const mongoose = require('mongoose');
const { Schema } = mongoose;


const reservationSchema = new Schema({
    customerID : String,
    roomID: String,
    checkIn: Date,
    checkOut: Date,
}, {
    timestamps: true
});

module.exports  = mongoose.model('Reservation', reservationSchema)