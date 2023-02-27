const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
        firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
        lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters long"]
    },
        userName: {
        type: String,
        required: [true, "User name is required"],
        minlength: [3, "User name must be at least 3 characters long"]
    },
        password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [3, "Pasword must be at least 3 characters long"]
    },
    },{timestamps: true});

module.exports.User = mongoose.model("User", UserSchema);