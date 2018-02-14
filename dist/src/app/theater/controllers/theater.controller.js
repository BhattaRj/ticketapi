'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _theater = require('./../models/theater.model');

var _theater2 = _interopRequireDefault(_theater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res, next) {

    var query = { isDeleted: false };
    _theater2.default.find(query).then(function (theaters) {
        return res.json(theaters);
    }).catch(function (e) {
        return next(e);
    });
}

function create(req, res, next) {

    var theater = new _theater2.default();
    theater.createdBy = req.user._id;

    if (req.body.title) theater.title = req.body.title;
    if (req.body.address) theater.address = req.body.address;

    theater.save().then(function (theater) {
        return res.json(theater);
    }).catch(function (e) {
        return next(e);
    });
}

function update(req, res, next) {
    _theater2.default.findById(req.params.id).then(function (theater) {
        if (req.body.title) theater.title = req.body.title;
        if (req.body.address) theater.address = req.body.address;
        return theater.save();
    }).then(function (theater) {
        return res.json(theater);
    }).catch(function (e) {
        return next(e);
    });
}

function remove(req, res, next) {
    _theater2.default.findById(req.params.id).then(function (theater) {
        theater.isDeleted = true;
        return theater.save();
    }).then(function (theater) {
        return res.json(theater);
    }).catch(function (e) {
        return next(e);
    });
}

exports.default = {
    list: list,
    create: create,
    update: update,
    remove: remove
};