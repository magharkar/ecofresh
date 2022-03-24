/**
 * @author Ruchi Shinde
 */

const express = require("express");
const route = express.Router();
const Users = require("../models/usersModel");
const Orders = require("../models/orderModel");
const { validatePassword, getPassword, createSalt } = require("../controllers/login")

route.get("/allUsers", (req, res) => {
  let users = usersModel.find({});
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching the users.");
  }
});

route.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  await Users.findOne({ "email": email }).then(result => {
    console.log("Res: " + result);
    console.log("Salt: " + result.salt);
    if (validatePassword(result.salt, result.password, password)) {
      console.log("valid");
      res.send({ "success": true, "user": email });
    }
    else {
      res.status(401).send({ "success": false, "message": "Invalid credentials" });
    }
  }).catch(err => {
    console.log("Err: " + err);
    res.send({ "success": false, "user": email });
  });
});

route.post("/register", (req, res) => {
  let isRegistered = true;
  let password = req.body.password
  let newUser = new Users();
  newUser.email = req.body.email;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.mealType = req.body.mealType;
  newUser.cuisine = req.body.cuisine;
  newUser.phoneNumber = req.body.phoneNumber;
  newUser.userType = req.body.userType;
  newUser.salt = createSalt();
  newUser.password = getPassword(newUser.salt, password);
  newUser.save().then(result => {
    console.log("in result");
    res.status(201).send("User created");
  }).catch(err => {
    console.log("Failed to add user.");
    console.log("Is user registered? " + isRegistered)
    res.status(400).send("User cannot be created");
  });

});


route.post("/updatePassword", (req, res) => {
  let email = req.body.email;
  Users.findOne({
    "email": email
  }, (err, data) => {
    if (data) {
      let password = getPassword(data.salt, req.body.password);
      console.log("new password" + password);
      Users.updateOne({ "email": email }, { "password": password }, (error, result) => {
        if (result) {
          res.send({ "success": true, "message": "Password updated" });
        }
        else {
          res.status(400).send({ "success": false, "message": "Cannot update password. Please check your request." });
        }
      });
    }
    else {
      res.status(400).send({ "success": false, "message": "Cannot update password. Please check your request." });
    }
  });

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


module.exports = route;
