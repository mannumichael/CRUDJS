const express = require('express');
const db = require('./Databases/mongodb');
const postgresdb = require('./Databases/postgredb') ;
const customerRoutes = require('./Routes/customers.js');
const app = express();
const port = 9000;
app.use(express.json());

//--------------------
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: true,
    })
);

//middleware--
app.use('/customers',customerRoutes);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
});
