const express = require('express');
const db = require('./Databases/db');
const customerRoutes = require('./Routes/customers.js');
const app = express();
const port = 9000;
app.use(express.json());

//middleware
app.use('/customers',customerRoutes);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
});
