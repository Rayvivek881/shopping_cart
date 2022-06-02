const mongoose = require('mongoose')
const AddressSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    PhoneNumber : {
        type: Number,
        required: true
    },
    PinCode : {
        type : Number,
        required: true
    },
    Address : {
        type: String,
        required: true
    },
    City : {
        type: String,
        required: true
    },
    State : {
        type : String,
        required : true
    },
    AlternatePhone : {
        type: Number,
        required: true
    }
}, { timestamps: true });
const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;