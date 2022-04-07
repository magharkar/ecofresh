const express = require("express");
const route = express.Router();
const Pantry = require("../models/pantryModel");


route.get("/pantry",async(req,res)=>{
    try{
    let  pantry = await Pantry.find({});
    console.log(pantry);
    res.send(pantry);
    }catch(error){
        console.log(error);
        res.status(500).send("Error while fetching the pantry ");
    }
  });
  

  module.exports = route;