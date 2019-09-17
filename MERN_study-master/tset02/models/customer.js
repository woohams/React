const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    id : Number,
    image : String,
    name : String,
    birthday : String,
    gender : String,
    job : String
});
    
module.exports = mongoose.model('customer', customerSchema);