var mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const pantryModel = new mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    supplierId:{
        type:String,
        required:true
    },
    Items:{
        "onions":{
            type: Number,
            required: true
        },
        "tomatoes":{
               type:Number,
               required:true
        },
        "salt":{
            type:Number,
            required: true

        }
    }

  

});

module.exports = mongoose.model("orders",orderDetailsModel);
