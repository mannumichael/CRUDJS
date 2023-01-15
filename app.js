const express = require('express') ;
const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;
const app = express() ;
dotenv.config() ;
const port = 9000 ;
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  useNewUrlParser:true 
}) ;

const db = mongoose.connection ;

db.once('open',()=>{
  console.log("Connected to MongoDB") ;
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port,()=>{
    console.log('Server started at port ${port}')
})
