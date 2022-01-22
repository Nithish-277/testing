const mongoose = require('mongoose')

const textBoxesSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    textArea : {
        type : String,
        minlength : 5,
        maxlength : 255,
        required : true,
        default : "This is defualt Text"
    }
})

const TextBox = mongoose.model('TextBox',textBoxesSchema)

module.exports = TextBox