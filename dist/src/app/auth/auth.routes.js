'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('./controllers/auth.controller');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/register')

/** POST /api/auth/register - register user. */
.post(_auth2.default.register);

router.route('/login')

/** POST /api/auth/login -login user */
.post(_auth2.default.login);

exports.default = router;