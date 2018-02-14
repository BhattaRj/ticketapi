'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _theater = require('./../models/theater.model');

var _theater2 = _interopRequireDefault(_theater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loc = {};

function create(req, res, next) {

    _theater2.default.findById(req.params.id).then(function (theater) {

        var child = {};

        if (req.body.title) child.title = req.body.title;
        if (req.body.size) child.size = req.body.size;
        loc.audi = theater.auditoriums.create(child);
        theater.auditoriums.push(loc.audi);
        return theater.save();
    }).then(function (theater) {
        res.json(loc.audi);
    }).catch(function (e) {
        return next(e);
    });
}

function update(req, res, next) {

    _theater2.default.findById(req.params.id).then(function (theater) {

        var audi = theater.auditoriums.id(req.params.audiId);

        if (req.body.title) audi.title = req.body.title;
        if (req.body.address) audi.size = req.body.size;

        return theater.save();
    }).then(function (theater) {
        res.json(theater.auditoriums.id(req.params.audiId));
    }).catch(function (e) {
        return next(e);
    });
}

function remove(req, res, next) {
    _theater2.default.findById(req.params.id).then(function (theater) {
        theater.auditoriums.id(req.params.audiId).remove();
        return theater.save();
    }).then(function (theater) {
        return res.json(theater);
    }).catch(function (e) {
        return next(e);
    });
}

exports.default = {
    create: create,
    update: update,
    remove: remove
};