const express = require('express');
const db = require('./Databases/db');
const customerRoutes = require('./Routes/customers.js');
const app = express();
const port = 9000;
app.use(express.json());

//--------------------
const bodyParser = require('body-parser');
const userRoutes = require('./routes/customers2');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: true,
    })
);

//middleware--
app.use('/db2', userRoutes);
app.use('/customers',customerRoutes);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
});
