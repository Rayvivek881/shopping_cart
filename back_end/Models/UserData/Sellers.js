const mongoose = require('mongoose');
const SellerSchema = mongoose.Schema({
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
    PenddingOrders : {
        type: Array,
        default: []
    },
    RunningOrders : {
        type: Array,
        default: []
    },
    newNotification : {
        type : Number,
        required: true
    },
    Ratting : {
        type : String,
        default: JSON.stringify([5, 0])
    }
}, { timestamps: true });
const Seller = mongoose.model('Seller', SellerSchema);
module.exports = Seller;