var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_registration = new mongoose.Schema({
    id:{
        type: String,
    },
    first_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model("Users", user_registration, "user_registration");