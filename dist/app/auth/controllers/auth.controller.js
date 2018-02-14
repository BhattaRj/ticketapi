'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('./../../../cofig/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Register user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function register(req, res, next) {

    var user = new _user2.default();
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.password) user.password = _bcrypt2.default.hashSync(req.body.password, 10);

    user.save().then(function (user) {
        return res.json(user);
    }).catch(function (e) {
        return next(e);
    });
}

/**
 * Login user.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function login(req, res, next) {

    _user2.default.findOne({ email: req.body.email }).then(function (user) {

        if (!user) return next(new Error('Email not found.'));

        if (!_bcrypt2.default.compareSync(req.body.password, user.password)) {
            return next(new Error('Worng password'));
        }

        var permissions = [];

        if (user.userType == 1) {
            permissions = ['user'];
        }

        if (user.userType == 2) {
            permissions = ['theaterAdmin'];
        }

        if (user.userType == 3) {
            permissions = ['superAdmin', 'theaterAdmin'];
        }

        var token = _jsonwebtoken2.default.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            permissions: permissions
        }, _config2.default.secret_key);

        res.json({
            user: user,
            token: token
        });
    }).catch(function (e) {
        return next(e);
    });
}

exports.default = {
    register: register,
    login: login
};