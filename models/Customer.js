const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    mobile_no: String,
    address: String,
    profile_img: String
});



const CustomerModel = new mongoose.model('Customer', customerSchema);
module.exports = CustomerModel;