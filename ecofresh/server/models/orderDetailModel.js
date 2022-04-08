var mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const orderDetailsModel = new mongoose.Schema({
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
    },
    ingredients:{
        type:String,
        required:true
    },
    Recipe_details:[{type:Schema.Types.ObjectId,ref:'recipe'}],
  

});
    
module.exports = mongoose.model("orders",orderDetailsModel);
