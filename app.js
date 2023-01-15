const express = require('express')
const mongoose = require('mongoose')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(9000,()=>{
    console.log('server started')
})