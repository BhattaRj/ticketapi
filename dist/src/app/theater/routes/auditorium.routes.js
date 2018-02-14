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

var _auditorium = require('./../controllers/auditorium.controller');

var _auditorium2 = _interopRequireDefault(_auditorium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guard = require('express-jwt-permissions')();

var router = _express2.default.Router();

router.route('/:id')

/** POST - /api/theater - list theaters  */
.post(_auditorium2.default.create);

router.route('/:id/:audiId')

/** PUT - api/theater -update */
.put((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _auditorium2.default.update)

/** DELETE - api/theater - remove theater */
.delete((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _auditorium2.default.remove);

exports.default = router;