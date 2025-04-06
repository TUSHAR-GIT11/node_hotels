const mongoose = require('mongoose')
require('dotenv').config()

//const mongoURL ='mongodb://127.0.0.1:27017/hotels';
const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL)

const db = mongoose.connection

db.on('connected',()=>{
  console.log("connected to mongodb server")
})

db.on('error',(err)=>{
  console.log("error in mongodb server",err)
})

db.on('disconnected',()=>{
  console.log("disconnected to mongodb server")
})

module.exports = db
