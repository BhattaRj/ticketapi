'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _movie = require('./movie/movie.routes');

var _movie2 = _interopRequireDefault(_movie);

var _auth = require('./auth/auth.routes');

var _auth2 = _interopRequireDefault(_auth);

var _file = require('./file/file.route');

var _file2 = _interopRequireDefault(_file);

var _theater = require('./theater/routes/theater.routes');

var _theater2 = _interopRequireDefault(_theater);

var _auditorium = require('./theater/routes/auditorium.routes');

var _auditorium2 = _interopRequireDefault(_auditorium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/health-check').get(function (req, res, next) {
    res.json({
        msg: 'okk'
    });
});

router.use('/movie', _movie2.default);
router.use('/auth', _auth2.default);
router.use('/file', _file2.default);
router.use('/theater', _theater2.default);
router.use('/autitorium', _auditorium2.default);

exports.default = router;