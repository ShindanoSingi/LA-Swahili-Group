const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    name:{
        type: String,
    },
    description: {
        type: String,
    },
    about: {
        type: String,
    },
    streetNumber: {
        type: String,
    },
    streetName: {
        type: String,
    },
    city: {
        type: String,
        },
    state: {
        type: String,
        },
    zipCode: {
        type: String,
        },
    country: {
        type: String,
            },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    createdBy:{
        type: String,
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Community', communitySchema);