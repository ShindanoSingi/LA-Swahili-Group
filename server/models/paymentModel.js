const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: 'Amount is required'
    },
    paymentDate: {
        type: Date,
        default: Date.now
    },
    day: {
        type: String,
        required: 'Day is required'
    },
    month: {
        type: String,
        required: 'Month is required'
    },
    year: {
        type: String,
        required: 'Year is required'
    },
    paid:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);