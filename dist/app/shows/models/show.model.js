'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movie: {
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    theater: {
        theater: {
            type: Schema.Types.ObjectId,
            ref: 'Theater',
            required: true
        },
        theaterName: {
            type: String
        },
        auditoriumName: {
            type: String,
            required: false
        }

    },
    seats: [{
        name: {
            type: String
        },
        status: {
            type: Boolean,
            // enum: ['free', 'booked', 'cancel'],
            default: false // 
        },
        price: {
            type: Number,
            required: false
        },
        bookedBy: {
            type: String,
            required: false
        }
    }]

}, {
    timestamps: true
});

exports.default = mongoose.model('Show', showSchema);