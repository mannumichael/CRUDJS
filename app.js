const express = require('express') ;
const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;
const app = express() ;
dotenv.config() ;
const port = 9000 ;
const customerRoutes = require('./routes/customers.js');

//connecting the mongoDB to nodejs via Connection string 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  useNewUrlParser:true 
}) ;

//DB handler
const db = mongoose.connection ;

app.use('/customers',customerRoutes) ;

db.once('open',()=>{
  console.log("Connected to MongoDB") ;
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})
