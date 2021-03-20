const productModal = require('../models').product
const mongoose = require('mongoose')

module.exports = {
    create: async (req, res) => {
        const data = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            unit: req.body.unit,
            catagory_id : req.body.catagory_id
        }
        const product = await productModal.create(data)
        res.json(product)

    },
    edit: async (req, res) => {
        const data = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            unit: req.body.unit
        }
        const product = await productModal.updateOne({_id : req.body._id} , data)
        res.json(product)
    },
    delete: async (req, res) => {
        const _id = req.body._id
        const product = await productModal.deleteOne({_id : _id})
        res.json(product)
    },
    get : async (req , res) => {
        const catagory_id = mongoose.Types.ObjectId(req.body.catagory_id)
        const product = await productModal.find({ catagory_id : catagory_id})
        res.json(product)
    }
}