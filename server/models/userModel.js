const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    phone: {
        type: String,
        required: 'Phone number is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    profilePicture: {
        type: String,
    },
    userRole: {
        type: String,
        default: 'User'
    },
    payments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment'
        }
    ]
},
{
    timestamps: true
});