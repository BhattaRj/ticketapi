'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _movie = require('./controllers/movie.controller');

var _movie2 = _interopRequireDefault(_movie);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _config = require('./../../cofig/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/')

/** GET /api/movie - return movies lsit */
.get((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _movie2.default.list)

/** POST /api/movie - create movie  */
.post((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _movie2.default.create);

router.route('/:movieId')

/** PUT /api/movie/movieid - update movie  */
.put(_movie2.default.update)

/** DELETE /api/movie/movieId - delete movie */
.delete(_movie2.default.remove);

exports.default = router;