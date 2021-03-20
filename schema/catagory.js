const mongoose = require('mongoose')

const catagorySchema = mongoose.Schema({
    name : String,
    description : String,
    store_id : mongoose.Types.ObjectId
})

module.exports = catagorySchema