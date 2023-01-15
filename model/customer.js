const mongoose = require('mongoose')


var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

const customerSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalcode: {
        type : String,
        required: true
    },
    date: {
        type: String,
        required: true,
        default : datetime 
    }
},{
    versionKey: false
})

module.exports = mongoose.model('customers',customerSchema)