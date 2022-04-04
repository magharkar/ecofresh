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
    res.status(500).send("Error while fetching recipes.");
  }
})

 route.post('/requestForm', async (req, res) => {
  let newRecipe = await new UploadRecipe();
  newRecipe.recipeTitle = req.body.recipeTitle;
  newRecipe.ingredients = req.body.ingredients;
  newRecipe.cookingTime = req.body.cookingTime;
  newRecipe.portionSize = req.body.portionSize;
  newRecipe.description = req.body.description;
  console.log(newRecipe);
  newRecipe.save().then(result => {
    const reqId = result.requestId;
    const usId = result.userId;
    console.log("in result");
    res.status(201).send({
      "requestId" : reqId,
      "userId" : usId
    });
  }).catch(err => {
    console.log("Failed to submit recipe upload request.");
    res.status(400).send("Recipe upload request cannot be submitted");
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