/**
 * @author Vibhor Bhatnagar
 */

 const { request } = require("express");
const express = require("express");
 const route = express.Router();
 const UploadRecipe = require("../models/uploadRecipeModel")

route.get('/getAllRequests', async (req, res) => {
  let recipes = await UploadRecipe.find({});
  try {
    res.status(200).send(recipes.splice(0,10));
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching recipes.");
  }
})

route.get('/:requestId', async (req, res) => {
    const requestId = req.params.requestId;
    await UploadRecipe.findOne({
      "requestId": requestId
    }).then(
      result=>{
        let finalResult = result;
        res.status(200).send(finalResult);
      }).catch(err=>{
        console.log("Err: " + err);
        res.status(400).send({ "message": "Recipe not found"});
    })
  });

  route.post('/update/:requestId', async(req,res) => {
      let reqId = req.params.requestId;
      await UploadRecipe.findOneAndUpdate({
          "requestId" : reqId
      }).then( result => {
        UploadRecipe.updateOne({requestId : reqId}, {$set: {"requestStatus" : "Approved"}});
        res.status(200).send(result);
      })
        .catch( (err) => {
            console.log("Err:" + err);
            res.status(500).send({message: "Could not update request status"});
        })
    })
  
module.exports = route;