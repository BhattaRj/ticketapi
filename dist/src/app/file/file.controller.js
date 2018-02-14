'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, cb) {
        var dir = './uploads';
        cb(null, dir);
    },
    filename: function filename(req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});

function uploadMoviePoster(req, res, next) {

    var upload = (0, _multer2.default)({
        storage: storage
    }).single('file');

    upload(req, res, function (err) {
        next(err);
        res.json(req.file);
    });
}

exports.default = {
    uploadMoviePoster: uploadMoviePoster
};