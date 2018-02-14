'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Register user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function register(req, res, next) {}

/**
 * Login user.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function login(req, res, next) {}

exports.default = {
  register: register,
  login: login
};