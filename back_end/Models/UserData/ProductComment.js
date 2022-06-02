const mongoose = require('mongoose');
const Comment = mongoose.Schema({
    ProductId : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },
    Massage : {
        type : String,
        required : true
    }
}, {timestamps : true});
const ProductComment = mongoose.model('ProductComment', Comment);
module.exports = ProductComment;
