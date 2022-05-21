const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const PaymentSchema = new Schema({
    PaymentID: { type: Number, required: true },
    CompanyName: { type: String, required: true },
    Address: { type: String, required: true },
    PostalCode: { type: String, required: true },
    Email: { type: String, required: true },
    Description: { type: String, required: true },
    Materials: { type: String, required: true },

}, {
    timestamps: true,
});


const Payment  = mongoose.model('Payment ', PaymentSchema);

module.exports = Payment ;

