var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderModel = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        default: function () {
            return Math.floor(Math.random() * 1234) + 10000;
        },
        index: { unique: true },
        required: true
    },
    recipes: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: false
    }


}, { collection: 'orders' });

module.exports = mongoose.model("ecofresh", orderModel);
