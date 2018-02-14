'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _movie = require('./../models/movie.model');

var _movie2 = _interopRequireDefault(_movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create movie
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function create(req, res, next) {

    var movie = new _movie2.default();
    movie.createdBy = req.user._id;
    if (req.body.title) movie.title = req.body.title;
    if (req.body.language) movie.language = req.body.language;
    if (req.body.poster) movie.poster = req.body.poster;

    movie.save().then(function (movie) {
        return res.json(movie);
    }).catch(function (e) {
        return res.json(e);
    });
}

/**
 * List movies
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function list(req, res, next) {

    var query = { isDelete: false };

    _movie2.default.find(query).sort({ createdAt: 1 }).populate('createdBy').then(function (movies) {
        return res.json(movies);
    }).catch(function (e) {
        return res.json(e);
    });
}

/**
 * Remove movie
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function remove(req, res, next) {

    _movie2.default.findById(req.params.movieId).then(function (movie) {
        movie.isDelete = true;
        return movie.save();
    }).then(function (movie) {
        res.json(movie);
    }).catch(function (e) {
        return res.json(e);
    });
}

/**
 * Update movie
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function update(req, res, next) {
    _movie2.default.findById(req.params.movieId).then(function (movie) {
        if (req.body.title) movie.title = req.body.title;
        if (req.body.language) movie.language = req.body.language;
        if (req.body.poster) movie.poster = req.body.poster;

        return movie.save();
    }).then(function (movie) {
        res.json(movie);
    }).catch(function (e) {
        return res.json(e);
    });
}

exports.default = {
    create: create,
    list: list,
    remove: remove,
    update: update
};