var mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const orderModel = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    orderId:{
        type: String,
        required: true
    },
    recipes:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    }


}, { collection: 'orders' });

module.exports = mongoose.model("ecofresh",orderModel);