/**
 * @author Meha Desai
 */

var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Payment = new mongoose.Schema({
    // _id: {
    //     type: String
    //     // required: true
    // },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    apartmentNumber: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    postal: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    instructions: {
        type: String
    },
    paymentId: {
        type: String
        // required: true
    },
    paymentStatus: {
        type: String
        // required: true
    }



}, { collection: 'payment' });

module.exports = mongoose.model("Payment", Payment);
