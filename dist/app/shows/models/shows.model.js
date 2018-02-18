'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var showSchema = new Schema({
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
        auditorium: {
            name: {
                type: String,
                required: true
            }
        }
    },
    seats: [{
        name: {
            type: String
        },
        status: {
            type: String,
            enum: ['free', 'booked', 'cancel'],
            default: 'free' // 
        },
        price: {
            type: Number,
            required: false
        }
    }]

}, {
    timestamps: true
});

exports.default = mongoose.model('Show', showSchema);