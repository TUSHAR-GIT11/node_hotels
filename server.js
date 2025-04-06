const express = require('express')
const app = express()
require('dotenv').config()


const db = require('./db')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = process.env.PORT || 3000



const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)  

app.listen(PORT,()=>{
  console.log("app running on port 3000")
})

