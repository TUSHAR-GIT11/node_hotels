const express = require('express')
const router = express.Router()
const Menu = require('../models/Menu')


router.post('/', async (req,res)=>{
    try{
     const data = req.body
     const newMenu = new Menu(data)
     const response = await newMenu.save()
     console.log("data saved")
     res.status(200).json(response)
 
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
 })

 router.get('/',async (req,res)=>{
    try{
      const data = await Menu.find()
      console.log("data fetched")
      res.status(200).json(data)
  
    } 
    catch(err){
      console.log(err)
      res.status({error:'Internal Server error'})
  
    }
  })

  module.exports = router 