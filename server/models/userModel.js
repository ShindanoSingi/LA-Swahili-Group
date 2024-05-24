const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    fullName:{
        type: String,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    role: {
        type: String,
        default: 'User'
    },
    isMember: {
        type: Boolean,
        default: false
    },
    totalAmount: {
        type: Number,
        default: 0
    },
    addedBy: {
        type: String,

    },
    payments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Payment'
        }
    ],
},
{
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);