'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _show = require('./../models/show.model');

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res, next) {

    // let query = {};    

    // if (req.query.theaterId) {
    //     query.theater = {};
    //     query.theater.theater = req.query.theaterId
    // }

    _show2.default.find().then(function (shows) {
        return res.json(shows);
    }).catch(function (e) {
        return nect(e);
    });
}

function create(req, res, next) {

    var show = new _show2.default();

    show.createdBy = req.user._id;

    if (req.body.title) show.title = req.body.title;

    if (req.body.date) show.date = req.body.date;

    if (req.body.movie) show.movie = req.body.movie;

    if (req.body.theater) show.theater = req.body.theater;

    if (req.body.seats) show.seats = req.body.seats;

    show.save().then(function (show) {
        return res.json(show);
    }).catch(function (e) {
        return next(e);
    });
}

function update(req, res, next) {

    _show2.default.findById(req.params.id).then(function (show) {

        if (req.body.date) show.date = req.body.date;

        if (req.body.movie) show.movie = req.body.movie;

        if (req.body.theater) show.theater = req.body.theater;

        if (req.body.seats) show.seats = req.body.seats;

        if (req.body.title) show.title = req.body.title;

        return show.save();
    }).then(function (show) {
        return res.json(show);
    }).catch(function (e) {
        return next(e);
    });
}

exports.default = {
    list: list,
    update: update,
    create: create
};