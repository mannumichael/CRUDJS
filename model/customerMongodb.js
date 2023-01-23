const mongoose = require('mongoose') ;
const { v4: uuidv4 } = require('uuid');

var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

const customerSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: uuidv4
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // _id: {
    //     type: String,
    //     required: true,
    //     default: uuidv4
    // },
    // name: {
    //     type : String,
    //     required: true,
    //     minlength: 2,
    //     maxlength: 50
    // },
    // city: {
    //     type: String,
    //     required: true,
    //     validate: {
    //         validator: function(value) {
    //             return /^[a-zA-Z\s]*$/.test(value);
    //         },
    //         message: "Invalid city format"
    //     },
    //     minlength: 2,
    //     maxlength: 50
    // },
    // postalcode: {
    //     type : String,
    //     required: true,
    //     validate: {
    //         validator: function(value) {
    //             return /^\d{6}$/.test(value);
    //         },
    //         message: "Invalid postal code format, should be 6 digits"
    //     }
    // },
    // date: {
    //     type: String,
    //     required: true,
    //     default : datetime 
    // }
},{
    versionKey: false
})
                
                

module.exports = mongoose.model('customers',customerSchema)