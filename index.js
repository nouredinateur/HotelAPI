const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/routes')

let port = 4242;
let url = 'mongodb://localhost:27017/booking';

mongoose.connect(url).then(() => {
    console.log('Connected to the database')
}).catch((err)=> {
    console.log(err)
})

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/', router)

app.listen(port, () => {
    console.log(`The server is running on port : ${port}`)
})