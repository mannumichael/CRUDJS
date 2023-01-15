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

router.post('/',async(req,res)=>{
    const customer = new Customer({
        name: req.body.name,
        city: req.body.city,
        postalcode: req.body.postalcode
    })
    try{
        const data =  await customer.save() ;
        res.json(data)
    }catch(err){
        res.send(err) ;
    }
})







module.exports = router 