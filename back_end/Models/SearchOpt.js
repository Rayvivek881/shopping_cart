const mongoose = require('mongoose')
const SearchSchame = mongoose.Schema({
    ProductType : {
        type : Number,
        required : true
    },
    ProductNmae : {
        type : String,
        required: true,
    },
    ProductId : {
        type : String,
        required : true
    }
}, {timestamps : true})
const SearchOpt = mongoose.model('SearchOpt', SearchSchame);
module.exports = SearchOpt;