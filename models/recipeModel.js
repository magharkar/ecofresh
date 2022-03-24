/**
 * @author Mugdha Agharkar
 */

 var mongoose = require('mongoose');
 const crypto = require('crypto');
 const Schema = mongoose.Schema;
 
 const Recipe = new mongoose.Schema({
     costPerMeal: {
         type: Number, 
         required: true
     },
     cuisine: {
         type: String,
         required: true
     },
     description: {
         type: String,
         required: true
     },
     ingredients: {
         type: String,
         required: true
     },
     mealType: {
         type: String,
         required: true
     },
     ratings: {
         type: String,
         required: true
     },
     recipeId: {
         type: String,
         required: true
     },
     recipeName: {
         type: String,
         required: true
     },
 
     submittedBy: {
         type: String
     },
     s3URL: {
         type: String
     },
 });
 

 
 module.exports = mongoose.model("Recipe", Recipe, "recipe");