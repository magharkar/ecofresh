const express = require("express");
const route = express.Router();
const Payment = require("../models/paymentModel")

route.post("/checkout", (req, res) => {
    let data = req.body;
    newPayment = new Payment();
    newPayment.address = data.address;
    newPayment.apartmentNumber = data.apartmentNumber;
    newPayment.city = data.city;
    newPayment.province = data.province;
    newPayment.postal = data.postal;
    newPayment.number = data.number;
    newPayment.instructions = data.instructions;

    newPayment.save().then(result => {
        res.send("Success");
        console.log(result);
    }).catch(err => {
        console.log(err);
        res.status(400).send("Inavlid input");
    });
});



module.exports = route;
