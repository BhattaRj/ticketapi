'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: false
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    poster: {
        type: String

    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

exports.default = mongoose.model('Movie', movieSchema);