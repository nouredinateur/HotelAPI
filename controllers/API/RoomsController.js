const Rooms = require('../../models/Rooms')

const index = (req, res) => {
    Rooms.find().then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}

const show = (req, res) => {
    let id = req.params.id;
    Rooms.findById(id).then((result)=> {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}

const store = (req, res) => {
    const customerData =  {...req.body}
    Rooms.insertMany(customerData).then((result) => {
        console.log(result)
        res.json('Record inserted')
    }).catch((err)=> {
        console.log(err);
        res.json('Storing failed')
    })
}

const destroy = (req, res) => {
    const { id } = req.params
    const record = { _id: id }
    Rooms.deleteOne(record).then((result)=> {
        console.log('deleted ', result)
        res.json('Deleted succefully')
    }).catch((err) => {
        console.log(err)
        res.json("Delete failed")
    })
}

const update = (req, res) =>  {
    const { id } = req.params
    const record = { _id: id }
    const updatedData =  {...req.body}
    Rooms.updateOne(record, updatedData).then((result)=> {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
}


module.exports =  {
    index,
    show,
    store,
    destroy,
    update
}