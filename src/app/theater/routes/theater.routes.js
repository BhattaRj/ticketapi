
import express from 'express';
import jwt from 'express-jwt';
import config from './../../../cofig/config';
import TheaterController from './../controllers/theater.controller';

var guard = require('express-jwt-permissions')()


const router = express.Router();

router.route('/my-theater')

    /** GEt - api/theater/my-theater  */
    .get(jwt({ secret: config.secret_key }),TheaterController.myList);


router.route('/')

    /** GET - api/theater - create theater  */
    .get(TheaterController.list, )

    /** POST - /api/theater - list theaters  */
    .post(jwt({ secret: config.secret_key }), TheaterController.create);


router.route('/:id')

    /** PUT - api/theater -update */
    .put(jwt({ secret: config.secret_key }), TheaterController.update)

    /** DELETE - api/theater - remove theater */
    .delete(jwt({ secret: config.secret_key }), TheaterController.remove);


export default router;