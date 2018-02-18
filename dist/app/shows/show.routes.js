'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressJwt = require('express-jwt');

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _config = require('./../../cofig/config');

var _config2 = _interopRequireDefault(_config);

var _show = require('./controllers/show.controller');

var _show2 = _interopRequireDefault(_show);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var guard = require('express-jwt-permissions')();

var router = _express2.default.Router();

router.route('/')

/** GET - api/theate - create theater  */
.get(_show2.default.list)

/** POST - /api/theater - list theaters  */
.post((0, _expressJwt2.default)({ secret: _config2.default.secret_key }), _show2.default.create);

router.route('/:id')

/** PUT - api/theater -update */
.put(_show2.default.update);

/** DELETE - api/theater - remove theater */
// .delete(jwt({ secret: config.secret_key }), ShowController.remove);

exports.default = router;