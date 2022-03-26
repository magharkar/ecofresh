const { Router } = require("express");
const express = require("express");
const Payment = require("../models/paymentModel");

const app = express.Router();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_51KhEA9D3pnjAoJfMngCLsewUw6zgT7tl2yYQbQUI62WwEHzwCnN2KCjmxIclMiUHN3P0BmZSF5g5QtFt7zDkhC6J00l4EFNiwH');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
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

// app.listen(4242, () => console.log("Node server listening on port 4242!"));


module.exports = app;