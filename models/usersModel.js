/**
 * @author Ruchi Shinde
 */

var mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const Users = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    MealType: {
        type: String,
        required: true
    },
    Cuisine: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    UserId: {
        type: String
    },
    Cart: {
        type: String
    },

    OrderId: {
        type: String
    },
    UserType: {
        type: String
    },

    Credits: {
        type: String
    }
});

/**
 * This code is derived from https://www.loginradius.com/blog/async/password-hashing-with-nodejs/
 * @param {String} password 
 */

Users.methods.validatePassword = (password) => {
    console.log(Users);
    let hashedPassword = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    if (this.Password === hashedPassword) {
        return true;
    }
}


module.exports = mongoose.model("Users", Users, "Users");