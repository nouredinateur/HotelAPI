const Rooms = require('../models/Rooms');
const Customer = require('../models/Customer');
const Reservation = require('../models/Reservation');

//method for unreserved rooms
const availableRooms = (req, res) => {
    const filter = { isReserved : false}
    Rooms.find(filter).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}

const bookedRooms = (req, res) => {
    const filter = { isReserved : true}
    Rooms.find(filter).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}

//for bookin a room
const bookingRoom = (req, res) => {
    let {roomID, customerID, checkIn, checkOut} = req.body
    const room = { roomID: roomID};
    const customer = { _id: customerID};
    const reservation = { 
        customerID: customerID,
        roomID : roomID,
        checkIn: checkIn,
        checkOut: checkOut
    }

    Customer.updateOne(customer,room).then((result) => {
        Rooms.updateOne({ _id: roomID}, { isReserved: true }).then((result) => {
            let reserved = Reservation.insertMany(reservation)
            console.log(result)
        }).catch((err)=> {
            console.log(err)
        })
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}

const reservation = (req, res) => {
    Reservation.find().then((result)=> {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}

module.exports  = {
    availableRooms,
    bookedRooms,
    bookingRoom,
    reservation
}