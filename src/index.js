const express = require('express')
const db = require('./db/mongoose')
const Template = require('./models/templates')
const TextBox = require('./models/text')

const app = express()
const port = process.env.PORT

app.use(express.json())

app.post('/textbox', (req,res) => {
    const textbox = req.body
    const newTextBox = new TextBox(textbox)
    newTextBox.save()
    res.send({'message' : 'Successfully Created',newTextBox})
})

const textbox1 = new TextBox({
    title : "First Text Box",
    textArea : "Hello World, This is the new Text Area for First Text Box..!"
})

const textbox2 = new TextBox({
    title : "Second Text Box",
    textArea : "Hello World, This is the new Text Area For Second Text Box..!"
})

textbox1.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log("Printing ",result)
    }
})

textbox2.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log("Printing ",result)
    }
})

const components = [textbox1,textbox2]

const template = new Template({
    title : "First Template",
    description : "Template to add text Boxes",
    components
})

template.save(function(err,result){
    if (err){
        console.log(err);
    }
    else{
        console.log("Printing Template ",result)
    }
})

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})