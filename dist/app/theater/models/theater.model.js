'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var auditoriumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: false
    }
});

var theaterSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    auditoriums: [auditoriumSchema]
}, {
    timestamps: true
});

exports.default = _mongoose2.default.model('Theater', theaterSchema);