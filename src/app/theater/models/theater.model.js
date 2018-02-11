
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

var theaterSchema = new Schema({

    title: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
}, {
        timestamps: true
    });


export default mongoose.model('Theater', theaterSchema);