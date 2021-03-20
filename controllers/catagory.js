const catagoryModel = require('../models').catagory
const productModal = require('../models').product
const mongoose = require('mongoose')

module.exports = {
    create: async (req, res) => {
        const data = {
            name: req.body.name,
            description: req.body.description,
            store_id : req.body.store_id
        }
        const catagory = await catagoryModel.create(data)
        res.json(catagory)
    },
    edit: async (req , res) => {
        const data = {
            name: req.body.name,
            description: req.body.description
        }
        const catagory = await catagoryModel.updateOne({_id : req.body._id} , data)
        res.json(catagory)
    },
    delete : async (req,res) => {
        const _id = mongoose.Types.ObjectId(req.body._id)
        const products = await productModal.find({ catagory_id : _id})
        products.map( async (item) => {
            await productModal.deleteOne( {_id : item._id})
        })
        const catagory = await catagoryModel.deleteOne({ _id : _id})
        res.json(catagory)
    },
    get : async (req , res) => {
        const store_id = mongoose.Types.ObjectId(req.body.store_id)
        const catagory = await catagoryModel.find({ store_id : store_id})
        res.json(catagory)
    }
}