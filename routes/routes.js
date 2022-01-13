const express = require('express');
const router = express();
const customer  = require('../routes/api/CustomerRoutes');
const rooms = require('../routes/api/RoomsRoutes');
const { availableRooms, bookedRooms, bookingRoom } = require('../controllers/Controller')


router.use("/customers/", customer)
router.use("/rooms/", rooms)

router.get("/", availableRooms) //return available rooms 
router.get("/booked", bookedRooms) //return booked rooms
router.post("/booking", bookingRoom)

module.exports = router