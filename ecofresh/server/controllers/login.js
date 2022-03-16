/**
 * @author Ruchi Shinde
 */

const Users = require("../models/usersModel");
const crypto = require("crypto");

/**
 * This code is derived from https://www.loginradius.com/blog/async/password-hashing-with-nodejs/
 * @param {String} password 
 */

validatePassword = (salt, password, actualPassword) => {
    let hashedPassword = crypto.pbkdf2Sync(actualPassword,
        salt, 1000, 64, `sha512`).toString(`hex`);
    if (password === hashedPassword) {
        return true;
    }
    return false;

}

login = (body) => {
    let email = body.email;
    let password = body.password;
    let isValidUser = false;
    let users = Users.find({ "Email": email }, (err, result) => {
        if (err) {
            console.log(err);
            isValidUser = false;
        }
    });

    if(users){
        console.log(users + " " + users.salt);
        if (validatePassword(users.salt, users.Password, password)) {
            isValidUser = true;
        }
    }

    return isValidUser;
};

module.exports = login;