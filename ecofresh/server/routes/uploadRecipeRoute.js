/**
 * @author Vibhor Bhatnagar
 */

 const express = require("express");
 const route = express.Router();
 const UploadRecipe = require("../models/uploadRecipeModel")

route.get('/getAllRequests', async (req, res) => {
  let recipes = await UploadRecipe.find({});
  try {
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "Error while fetching recipes."});
  }
})

 route.post('/requestForm', async (req, res) => {
  let newRecipe = await new UploadRecipe();
  console.log("in upload form")
  newRecipe.submittedBy = req.body.userId;
  newRecipe.recipeName = req.body.recipeName;
  newRecipe.cuisine = req.body.cuisine;
  newRecipe.costPerMeal = req.body.costPerMeal;
  newRecipe.mealType = req.body.mealType;
  newRecipe.ingredients = req.body.ingredients;
  newRecipe.description = req.body.description;
  console.log(newRecipe);
  console.log(req.body);
  newRecipe.save().then(result => {
    const reqId = result.requestId;
    const usId = result.userId;
    res.status(200).send({
      "requestId" : reqId,
    });
  }).catch(err => {
    res.status(400).send({message: "Recipe upload request cannot be submitted" + err});
  });
});

route.get('/:requestId', async (req, res) => {
  const requestId = req.params.requestId;
  await UploadRecipe.findOne({
    "requestId": requestId
  }).then(
    result=>{
      let requestStatus = result.requestStatus;
      res.status(200).send(requestStatus);
    }).catch(err=>{
      console.log("Err: " + err);
      res.status(400).send({ "message": "Recipe not found"});
  })
});

  module.exports = route;