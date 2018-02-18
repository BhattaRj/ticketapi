'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./controllers/user.controller');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.route('/')

/** GET /api/user - list users. */
.get(_user2.default.list);

router.route('/:id')

/** PUT /api/user -login user */
.put(_user2.default.update);

exports.default = router;