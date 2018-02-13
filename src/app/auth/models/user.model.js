

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        default: 1,    // 1- User , 2-TheaterAdmin 3-Super Admin.
    }
});

export default mongoose.model('User', userSchema);

