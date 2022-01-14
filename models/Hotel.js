const mongoose = require('mongoose');
const { Schema } = mongoose;


const hotelSchema = new Schema({
    customerID : String,
    roomID: String,
    checkIn: Date,
    checkOut: Date,
}, {
    timestamps: true
});

module.exports  = mongoose.model('Hotel', reservationSchema)