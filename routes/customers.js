const express = require('express');
const router = express.Router() ;


router.get('/',(req,res)=>{
    // res.send("GET REQUEST")
    const customers = Customer.find() ;
    try{
        res.send(customers) ;
    }catch(err){
        res.send(err) ;
    }
})







module.exports = router 