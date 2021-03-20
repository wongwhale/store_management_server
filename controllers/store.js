const productModal = require('../models').product
const catagoryModal = require('../models').catagory
const storeModel = require('../models').store

module.exports = {
    create: async (req, res, next) => {
        // const 
        const data = {
            name: req.body.name,
            description: req.body.description,
            phone: req.body.phone,
            address: req.body.address
        }
        const store = await storeModel.create(data)
        res.json(store)
    },
    get: async (req, res, next) => {
        const store = await storeModel.find()
        res.json(store)
    },
    delete: async (req, res) => {
        const catagories = await catagoryModal.find( {store_id : req.body._id})
        catagories.map((catagory) => {
            productModal.find( {catagory_id : catagory._id})
            .then( async (products) => {
                products.map( async (product) => {
                    // console.log(product);
                    await productModal.deleteOne({_id : product._id})
                })
                await catagoryModal.deleteOne({_id : catagory._id})
            })
        })
        const store = await storeModel.deleteOne({ _id: req.body._id })
        res.json(store)
    },
    edit: async (req, res) => {
        const data = {
            name: req.body.name,
            description: req.body.description,
            phone: req.body.phone,
            address: req.body.address
        }
        const store = await storeModel.updateOne({ _id: req.body._id }, data)
        res.json(store)
    }
}