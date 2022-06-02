const mongoose = require('mongoose');
const OrderScheme = mongoose.Schema({
    Products : {
        type : Array,
        required : true
    },
    Tracker : {
        type : Array,
        required: true
    },
    CurrentStatus : {
        type : String,
        default : "Processing"
    },
    SellerId : {
        type : String,
        required : true
    },
    UserId : {
        type : String,
        required : true
    },
    EstimateDate : {
        type : String,
        required : true
    }
}, { timestamps : true });
const Orders = mongoose.model('Orders', OrderScheme);
module.exports = Orders;