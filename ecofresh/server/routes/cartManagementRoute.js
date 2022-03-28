const express = require("express");
const route = express.Router();
const Cart = require("../models/cartModel")

route.post("/addToCart", (req, res) => {
    let data = req.body;
    newCart = new Cart();
    newCart.recipeName = data.recipeName;
    newCart.price = data.price;
    newCart.qty = data.qty;
    newCart.userEmail = data.userEmail;

    newCart.save().then(result => {
        res.send("Success");
    }).catch(err => {
        console.log(err);
        res.status(400).send("Inavlid input");
    });
});

route.delete("/deleteItem/:recipeName", (req,res)=>{
    let recipeName = req.params.recipeName;
    console.log(recipeName);
    if(recipeName != null){
        Cart.deleteOne({"recipeName": recipeName}).then(result => {
            console.log(result);
            res.status(200).send("Recipe deleted");
        }).catch(err => {
            res.status(400).send("Invalid request");
        });
    }else{
        res.status(400).send("Please pass a valid recipe name");
    }
    
});



module.exports = route;