
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


var auditoriumSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: false
    }
});

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
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    auditoriums:[
        auditoriumSchema
    ]
}, {
        timestamps: true
    });


export default mongoose.model('Theater', theaterSchema);