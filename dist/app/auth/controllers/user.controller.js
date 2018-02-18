'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list(req, res, next) {

    _user2.default.find().then(function (users) {
        return res.json(users);
    }).catch(function (e) {
        return nect(e);
    });
}

function update(req, res, next) {

    _user2.default.findById(req.params.id).then(function (user) {

        if (req.body.name) user.name = req.body.name;

        if (req.body.email) user.email = req.body.email;

        if (req.body.userType) user.userType = req.body.userType;

        return user.save();
    }).then(function (user) {
        return res.json(user);
    }).catch(function (e) {
        return next(e);
    });
}

exports.default = {
    list: list,
    update: update
};