/**
 * @author Ruchi Shinde
 */

const express = require("express");
const route = express.Router();
const Users = require("../models/usersModel");
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

route.post("/login",  (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  Users.findOne({ "email": email }).then(result => {
    console.log("Res: " + result);
    console.log("Salt: " + result.salt);
    if (validatePassword(result.salt, result.password, password)) {
      console.log("valid");
      res.send({ "success": true, "user": email });
    }
  }).catch(err => {
    console.log("Err: " + err);
    res.send({ "success": true, "user": email });
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

module.exports = route;
