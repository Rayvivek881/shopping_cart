const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema({
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
}, {timestamps : true});
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;