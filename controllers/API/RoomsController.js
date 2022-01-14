const Rooms = require('../../models/Rooms')

const index = (req, res) => {
    Rooms.find().then((result) => {
        if(result.length > 0){
            res.status(200).json(result)
        }else{
            res.status(204).json("No Content Found")
        }
    }).catch((err) => {
        res.json(err)
    })
}

const show = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Rooms.findById(id)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

const store = async (req, res) => {
    const roomData =  {...req.body}
    try {
        const result = await  Rooms.insertMany(roomData);
        res.status(200).json({message: "Store Succes"})
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

const destroy = async (req, res) => {
    const { id } = req.params
    const record = { _id: id }
    try {
        const result = await Rooms.deleteOne(record)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

const update = async (req, res) =>  {
    const { id } = req.params
    const record = { _id: id }
    const updatedData =  {...req.body}
    try {
        const result = await Rooms.updateOne(record, updatedData)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}


module.exports =  {
    index,
    show,
    store,
    destroy,
    update
}