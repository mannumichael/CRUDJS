const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//connecting the mongoDB to nodejs via Connection string 
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
  useNewUrlParser:true 
});

const db = mongoose.connection;

db.once('open',()=>{
  console.log("Connected to MongoDB");
});

module.exports = db;
