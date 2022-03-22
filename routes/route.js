const express = require("express")
const route = express.Router();
const Users = require("../models/user");

route.get("/user/:id", (req, res) => {
    let param = req.params.id;
    Users.findOne({ $or: [{ "email": param }, { "first_name": param }] }).then(result => {
        if (result.length == 0) {
            res.send({
                "success": false,
                "user": {}
            });
        }
        else {
            res.send({
                "success": true,
                "user": {
                    "email": result.email,
                    "firstName": result.first_name,
                    "id": result.id
                }
            });
        }
    }).catch(err => {
        res.status(400).send({
            "success": false,
            "message": "Cannot fetch users"
        });
    });
});

route.get("/user", (req, res) => {
    let param = req.query.id;
    Users.findOne({ $or: [{ "email": param }, { "first_name": param }] }).then(result => {
        if (result.length == 0) {
            res.send({
                "success": false,
                "user": {}
            });
        }
        else {
            res.send({
                "success": true,
                "user": {
                    "email": result.email,
                    "firstName": result.first_name,
                    "id": result.id
                }
            });
        }
    }).catch(err => {
        res.status(400).send({
            "success": false,
            "message": "Cannot fetch users"
        });
    });
});

route.get("/users", (req, res) => {
    Users.find({}).then(result => {
        if (result.length == 0) {
            res.send({
                "success": false,
                "message": "Users not found",
                "users": result
            });
        }
        else {
            res.send(
                {
                    "success": true,
                    "message": "Users retrieved",
                    "users": result
                });
        }
    }).catch(err => {
        res.status(400).send({
            "success": false,
            "message": "Error. Cannot fetch users.",
            "users": []
        });
    });
});

route.post("/add", (req, res) => {
    let body = req.body;
    let newUser = new Users();
    newUser.email = body.email;
    newUser.first_name = body.firsName;
    newUser.save().then(result => {
        res.send({
            "message": "User added",
            "success": true
        });
    }).catch(err => {
        res.status(400).send({
            "message": "User is not created",
            "success": false
        });
    })

});

route.put("/update/:id", (req, res) => {
    let param = req.params.id;
    let body = req.body;
    let newUser = new Users();
    if (body.email) {
        newUser.email = body.email;
    }
    if (body.password) {
        newUser.password = body.password;
    }
    if (body.firstName) {
        newUser.first_name = body.firstName;
    }
    var response = {}
    Users.findOneAndUpdate({ $or: [{ "email": param }, { "first_name": param }, { "id": param }] }, body).then(result => {
        res.send({
            "message": "User updated",
            "success": true
        });
    }).catch(error => {
        res.status(400).send({
            "message": "User cannot be updated",
            "success": true
        });
    });
});


module.exports = route;