require('dotenv').config()

const { Router } = require("express");
const express = require("express");
const Payment = require("../models/paymentModel");

const secretKey = process.env.STRIPE_PRIVATE_KEY

const app = express.Router();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
console.log(secretKey)
const stripe = require("stripe")(secretKey);

// console.log(secretKey)

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
    //     let data = req.body;
    //     newPayment = new Payment();
    //     newPayment.email = data.email;
    //     newPayment.address = data.address;
    //     newPayment.apartmentNumber = data.apartmentNumber;
    //     newPayment.city = data.city;
    //     newPayment.province = data.province;
    //     newPayment.postal = data.postal;
    //     newPayment.number = data.number;
    //     newPayment.instructions = data.instructions;

    //     newPayment.save().then(result => {
    //         res.send("Success");
    //         console.log(result);
    //     }).catch(err => {
    //         console.log(err);
    //         res.status(400).send("Inavlid input");
    //     });
});

// app.post("/payment", (req, res) => {
//     let data = req.body;
//     newPayment = new Payment();
//     newPayment.email = data.email;
//     newPayment.address = data.address;
//     newPayment.apartmentNumber = data.apartmentNumber;
//     newPayment.city = data.city;
//     newPayment.province = data.province;
//     newPayment.postal = data.postal;
//     newPayment.number = data.number;
//     newPayment.instructions = data.instructions;

//     newPayment.save().then(result => {
//         res.send("Success");
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//         res.status(400).send("Invalid input");
//     });
// });

// app.listen(4242, () => console.log("Node server listening on port 4242!"));


module.exports = app;