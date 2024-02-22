const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    fullName:{
        type: String,
    },
    amount: {
        type: Number,
        required: true
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    day: {
        type: String,
        default: '21'
    },
    month: {
        type: String,
        default: '02'
    },
    year: {
        type: String,
        default: '2024'
    },
    paid:{
        type: Boolean,
        default: false
    },
    addedBy:{
        type: String,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);