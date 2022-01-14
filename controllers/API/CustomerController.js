const Customer = require('../../models/Customer')


const index = (req, res) => {
    Customer.find().then((result) => {
        if(result.length > 0){
            res.status(200).json(result)
        }else{
            res.status(204).json("No Content Found")
        }
    }).catch((err) => {
        console.log(err)
    })
}

const show = async (req, res) => {
    let id = req.params.id;
    try {
        const result = await Customer.findById(id)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

  

const store = async (req, res) => {
    const customerData =  {...req.body}
    try {
        const result = await  Customer.insertMany(customerData);
        res.status(200).json({message: "Store Succes"})
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

const destroy = async (req, res) => {
    const { id } = req.params
    const record = { _id: id }
    try {
        const result = await Customer.deleteOne(record)
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
        const result = await Customer.updateOne(record, updatedData)
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