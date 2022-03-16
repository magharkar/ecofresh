/**
 * @author Ruchi Shinde
 */

const express = require("express");
const route = express.Router();
const usersModel = require("../models/usersModel");
const login = require("../controllers/login");
const register = require("../controllers/register");

route.get("/allUsers", async (req, res) => {
  let users = await usersModel.find({});
  try {
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error while fetching the users.");
  }
});

route.post("/login", (req, res) => {
  let body = req.body;
  let isValidUser = login(body);
  if (isValidUser) {
    res.send({ "success": true , "user": body.Email});
  }
  else {
    res.send({ "success": false});
  }
});

route.post("/register", (req, res) => {
let body = req.body;
let isRegistered =  register(body);
if(isRegistered){
  res.status(201).send({"success": true});
}
else{
  res.status(400).send({ "success": false});
}
});

module.exports = route;
