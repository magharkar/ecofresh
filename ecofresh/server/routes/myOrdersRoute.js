/**
 * @author Ruchi Shinde
 */
const express = require("express")
const orderModel = require("../models/orderModel")
const Recipes = require("../models/recipeModel")
const { getRatingsForRecipe } = require("../controllers/recipe");
const route = express.Router()

route.get("/test", (req, res) => {
    res.send("Hello");
});

route.get("/getAllOrdersForUser/:email", (req, res) => {
    let email = req.params.email
    orderModel.find({ userId: email }).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send({ "success": false });
    });
});

route.get("/getOrderDetails/:orderId", (req, res) => {
    let orderId = req.params.orderId;
    orderModel.find({ orderId: orderId }).then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Error while getting data");
    });
});

route.post("/updateRatings", (req, res) => {
    let requestBody = req.body;
    let orderId = requestBody.orderId;
    let rating = requestBody.ratings;
    let recipeName = requestBody.recipeName;
    let existingRating = getRatingsForRecipe(recipeName);
    let avgRating = (rating + existingRating) / 2;
    let successOrdersRatingUpdate = false;
    let successRecipeRatingUpdate = false;
    orderModel.updateOne({ orderId: orderId }, { ratings: rating }).then(result => {
        successOrdersRatingUpdate = true;
    }).catch(err => {
        console.log(err);
        successOrdersRatingUpdate = false;
    });

    Recipes.updateOne({ recipeName: recipeName }, { ratings: avgRating }).then(result => {
        successRecipeRatingUpdate = true
    }).catch(err => {
        console.log(err);
        successRecipeRatingUpdate = false;
    });

    if (successOrdersRatingUpdate && successRecipeRatingUpdate) {
        res.send({ "success": true });
    }
    else {
        res.status(400).send({ "success": false });
    }
});

module.exports = route