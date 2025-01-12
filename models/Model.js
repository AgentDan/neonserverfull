const mongoose = require('mongoose')

const component = new mongoose.Schema({
    groupElements: {type: Number, required: false},
    name: {type: String, required: false},
    file: {type: String, required: false},
    check: {type: Boolean}
})

const def = new mongoose.Schema({
    file: {type: String, required: false}
})

const projects = new mongoose.Schema({
    check: {type: Boolean},
    nameproject: {type: String},
    def: [def],
    components: [component]
})

const mainnewSchema = new mongoose.Schema({
    name: {type: String, required: false},
    projects: [projects],
})

module.exports = mongoose.model("Model", mainnewSchema)
