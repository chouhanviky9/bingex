const mongoose = require('mongoose');

//this is schema type for storing a user information in mogodb
const userSchema = {
    name: {
        type: String,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String
    },
    profile_pic: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    currentBtx: {
        type: Number,
        default: 0,
        required: true
    }

}

const User = mongoose.model('User', userSchema);
module.exports = User;

