var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new mongoose.Schema({
    qty: {
        type: Number
    },
    recipeName: {
        type: String
    },
    recipePrice: {
        type: Number
    },
    userEmail: {
        type: String
    }
});

module.exports = mongoose.model("Cart", Cart, "cart");