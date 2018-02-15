'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _config = require('./cofig/config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./app/index.route');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIR = 'uploads/';

var app = (0, _express2.default)();

_mongoose2.default.connect(_config2.default.mongohost);

var db = _mongoose2.default.connection;

db.on('error', function (e) {
    console.log(e);
});

db.once('open', function () {
    console.log('Connected to database...');
});

app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('combined'));
// parse application/x-www-form-urlencoded
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// parse application/json
app.use(_bodyParser2.default.json());

app.use(_express2.default.static('uploads'));

app.use('/api', _index2.default);

// Error
app.use(function (err, req, res, next) {

    res.status(err.status || 500).json({
        msg: err.message,
        stack: err.stack
    });
});

app.listen(process.env.PORT || 3000, function () {
    return console.log('Example app listening on port 3000!');
});