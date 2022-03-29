/**
 * @author Meha Desai
 */

require('dotenv').config()

const { Router } = require("express");
const express = require("express");
const Payment = require("../models/paymentModel");

const secretKey = process.env.STRIPE_PRIVATE_KEY

const app = express.Router();

console.log(secretKey)
const stripe = require("stripe")(secretKey);


app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {

    return 1400;
};

app.get("/payment", async (req, res) => {
    try {
        let payments = await Payment.find({});
        res.status(200).send(payments);
        console.log(payments)
    } catch (error) {
        console.log(error);
        res.status(500).send("Error while fetching the payments.");
    }
});

app.post("/payment", async (req, res) => {
    const { items } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "cad",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });

});



module.exports = app;