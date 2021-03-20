const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    unit : String,
    catagory_id : mongoose.Types.ObjectId
})

module.exports = productSchema