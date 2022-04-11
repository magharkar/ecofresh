/**
 * @author Sumadhur Vaidyula
 */


const express = require("express");
const route = express.Router();
const Orders = require("../models/orderModel")
const OrderDetails = require("../models/orderDetailModel");


route.post("/update/:id", (req, res) => {
    let id = req.params.id;
    let status ="completed";
    try{
    Orders.findOne({
      "orderId": id
    }, (err, data) => {
      if (data) {
        console.log(data)
        Orders.updateOne({ "orderId": id },{$set:{ status: 'completed' }}, (error, result) => {
          if (result) {
              console.log(result)
            res.send({ "success": true, "message": "Status updated" });
          }
          else {
            res.status(400).send({ "success": false, "message": "Cannot process request" });
          }
        });
      }
     
    });
}catch{
    res.status(400).send({ "success": false, "message": "Cannot process request" });
}
  
})



route.post("/cancel/:id", (req, res) => {
  let id = req.params.id;
  let status ="cancelled";
  try{
  Orders.findOne({
    "orderId": id
  }, (err, data) => {
    if (data) {
      console.log(data)
      Orders.updateOne({ "orderId": id },{$set:{ status: 'cancelled' }}, (error, result) => {
        if (result) {
            console.log(result)
          res.send({ "success": true, "message": "Status updated" });
        }
        else {
          res.status(400).send({ "success": false, "message": "Cannot process request" });
        }
      });
    }
   
  });
}catch{
  res.status(400).send({ "success": false, "message": "Cannot process request" });
}

})



route.get("/orders",async(req,res)=>{
    try{
    let  orders = await Orders.find({$or: [{ status: "placed" }, { status: "Placed" }]});
    console.log(orders);
    res.send(orders);
    }catch(error){
        console.log(error);
        res.status(500).send("Error while fetching the orders ");
    }
  });
  
  
  route.get(`/orders/:id`,async(req,res)=>{

    try{
        let param = req.params.id;

    Orders.aggregate([
        {$lookup:{ from: 'recipe', localField:'recipeName', 
        foreignField:'recipeName',as:'Recipe_details'}},
        {
            $match:{orderId:req.params.id}
        }
]).then(result=>{
    console.log(result)
    res.send({
     "Order_id":result[0].orderId,
     "user_id":result[0].userId,
     "Recipe_name": result[0].recipeName,
     "Ingredients": result[0].Recipe_details[0].ingredients,
     "Cost_Per_meal":result[0].Recipe_details[0].costPerMeal

    });
});
    }
    catch{
        res.status(400).send("Cannot fetch data")
    }

});
  
  
  
  
  
  module.exports = route;
  