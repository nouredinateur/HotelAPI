const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/routes')
require('dotenv').config();

let port = process.env.PORT;
let url = process.env.URL;

mongoose.connect(url,
    {
        server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    }
).then(() => {
    console.log('Connected to the database')
}).catch((err)=> {
    console.log(err)
})

app.get('/', (req, res) => {
    res.render('index.html')
})

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/', router)

app.listen(port, () => {
    console.log(`The server is running on port : ${port}`)
})