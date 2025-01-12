const mongoose = require('mongoose')
const {Types}  = require("mongoose")

const components = new mongoose.Schema({
    group: {type: String, required: true},
    name: {type: String},
    tile: {type: String},
    check: {type: Boolean}
})

const mainSchema = new mongoose.Schema({
    owner: {
        type: Types.ObjectId, ref: "User"
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    designer: {
        type: String,
        required: true,
    },
    paramA: [components],
    paramB: [String],
    paramC: [String],
    paramD: [String]
    ,
    timeCreated: {
        type: Date,
        default: () => Date.now(),
    },
    img: {
        type: String,
        default: "placeholder.jpg"
    }
})

module.exports = mongoose.model('Main', mainSchema)