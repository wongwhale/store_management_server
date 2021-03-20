const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    name : String,
    description : String,
    phone : String,
    address : String,
})

module.exports = storeSchema