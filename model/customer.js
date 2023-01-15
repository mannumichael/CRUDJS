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
        type : string,
        required: true
    },
    city: {
        type: string,
        required: true
    },
    postalcode: {
        type : string,
        required: true
    },
    date: {
        type: string,
        required: true,
        default : datetime 
    }
})

module.exports = mongoose.model('customers',customerSchema)