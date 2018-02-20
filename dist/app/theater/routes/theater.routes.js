'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _config = require('./../../../cofig/config');

var _config2 = _interopRequireDefault(_config);

var _theater = require('./../controllers/theater.controller');

var _theater2 = _interopRequireDefault(_theater);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guard = require('express-jwt-permissions')();

var router = _express2.default.Router();

router.route('/my-theater')

/** GEt - api/theater/my-theater  */
.get((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _theater2.default.myList);

router.route('/')

/** GET - api/theater - create theater  */
.get(_theater2.default.list)

/** POST - /api/theater - list theaters  */
.post((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _theater2.default.create);

router.route('/:id')

/** PUT - api/theater -update */
.put((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _theater2.default.update)

/** DELETE - api/theater - remove theater */
.delete((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _theater2.default.remove);

exports.default = router;