const mongoose = require('mongoose')
const FashionSchema = mongoose.Schema({
    ProductName : {
        type : String,
        required : true
    },
    ProductType : {
        type : String,
        required: true
    },
    Images : {
        type : Array,
        required : true
    },
    Price : {
        type : Number,
        required : true
    },
    SellerId : {
        type : Number,
        required : true
    },
    Comments : {
        type : Array,
        required : true
    },
    Stock : {
        type : Number,
        required : true
    },
    Ratting : {
        type : String,
        required : JSON.stringify([5, 0])
    }
}, { timestamps: true });
const Fashion = mongoose.model('Fashion', FashionSchema);
module.exports = Fashion;