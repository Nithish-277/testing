const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    components : [
        {
            elementType : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'TextBox'
            }
        }
    ]
})

const Template = mongoose.model('Template',templateSchema)

module.exports = Template