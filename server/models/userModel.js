const mongoose = require('mongoose');
//Schema for user
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    username: {
        type: String,
        default: null
    },
    password: {
        type: String,
        default: null
    },
    dob: {
        type: Date,
        default: null
    },
    joined: {
        type: Date,
        default: Date.now
    }
},{collection: 'users'});

module.exports = mongoose.model('users', userSchema);