const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    Email : {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Notifications: {
        type: Array,
        default: []
    },
    Orders : {
        type : Array,
        default: []
    },
    newNotification: {
        type: Number,
        default: 0
    }
}, {timestamps: true});
const User = mongoose.model('User', UserSchema);
module.exports = User;