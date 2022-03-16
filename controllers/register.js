/**
 * @author Ruchi Shinde
 */

const Users = require("../models/usersModel");
const crypto = require("crypto");

getPassword = (salt, password) => {
    let saltedPassword = crypto.pbkdf2Sync(password,
        salt, 1000, 64, `sha512`).toString(`hex`);
    console.log(salt + " " + saltedPassword);
    return saltedPassword;
}

createSalt = () => {
    let salt = crypto.randomBytes(16).toString('hex');
    return salt;
}

register = (body) => {
    let isRegistered = true;
    let password = body.Password
    let newUser = new Users();
    newUser.Email = body.Email;
    newUser.FirstName = body.FirstName;
    newUser.LastName = body.LastName;
    newUser.MealType = body.MealType;
    newUser.Cuisine = body.Cuisine;
    newUser.salt = createSalt();
    newUser.Password = getPassword(newUser.salt, password);
    // newUser.Password = password;
    // newUser.setPasswordAndSalt(password);
    newUser.save((err, result) => {
        if (err) {
            console.log("Failed to add user.");
            isRegistered = false;
            console.log("Is user registered? "+isRegistered)
            return isRegistered;
        }
    });
    return isRegistered;
}

module.exports = register;