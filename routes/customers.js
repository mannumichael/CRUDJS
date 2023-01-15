const express = require('express');
const router = express.Router() ;
const Customer = require('../model/customer.js')

router.get('/',async(req,res)=>{
    // res.send("GET REQUEST")
    
    try{
        const customers =  await Customer.find() ;
        res.json(customers)
    }catch(err){
        res.send(err) ;
    }
})







module.exports = router 