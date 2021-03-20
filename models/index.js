const schema = require('../schema')
const mongoose = require('mongoose')

module.exports = {
    store : mongoose.model('store' , schema.storeSchema),
    product : mongoose.model('product' , schema.productSchema),
    catagory : mongoose.model('catagory' , schema.catagorySchema)
}
