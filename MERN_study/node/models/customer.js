const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
//    id : {type : Number, unique : true},
    id : Number,
    name : String
});

module.exports = mongoose.model('customer', customerSchema);