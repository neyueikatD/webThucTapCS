const { name } = require('ejs');
const mongoose = require('mongoose');
const { type } = require('os');
const { stringify } = require('querystring');
const userSchema = new mongoose.Schema({
    name: {
        type: stringify,
        required:true, 
    },
    email: {
        type: string,
        required: true,
    },
    phone: {
        type: string,
        required: true,
    },
    image: {
        type: string,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);