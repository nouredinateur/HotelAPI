const nodemailer = require("nodemailer");
const Rooms = require('../models/Rooms');
const Customer = require('../models/Customer');
const Reservation = require('../models/Reservation');

//method for unreserved rooms
const availableRooms = async (req, res) => {
    const filter = { isReserved : false}
    try {
        const result = await   Rooms.find(filter)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: err })
    }
}

const bookedRooms = async (req, res) => {
    const filter = { isReserved : true}
    try {
        const result = await   Rooms.find(filter)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ message: err })
    }
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



const sendEmail = async (req, res) => {
    const { sender ,receiver, room } = req.body

    let transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: process.env.EMAIL_USERNAME, 
          pass: process.env.EMAIL_PASSWORD,
        },
    });
    const mailOptions = {
        from: sender, // Sender address
        to: receiver, // List of recipients
        subject: 'Roome Reservation', // Subject line
        html: `
        <div>
            <h1>A room has been reserved for you</h1>
            <h4>Room Number: ${ room }</h4>
        </div>`
   };
   
   transporter.sendMail(mailOptions, function(err, info) {
       if (err) {
         console.log(err)
       } else {
         console.log(info);
         res.json(info)
       }
   });
}

module.exports  = {
    availableRooms,
    bookedRooms,
    bookingRoom,
    reservation,
    sendEmail
}