const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const PaymentSchema = new Schema({
    PaymentID: { type: String, required: true },
    CustomerID: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Email: { type: String, required: true },
    PaymentMethod: { type: String, required: true },
    PackageName: { type: String, required: true },
    TotalAmount: { type: String, required: true },
    PaymentStatus: { type: String, required: true },

}, {
    timestamps: true,
});

const Payment  = mongoose.model('Payment ', PaymentSchema);

module.exports = Payment ;




