
import express from 'express';
import jwt from 'express-jwt';
import config from './../../../cofig/config';
import TheaterController from './../controllers/theater.controller';

var guard = require('express-jwt-permissions')()


const router = express.Router();

router.route('/')

    /** GET - api/theate - create theater  */
    .get(jwt({ secret: config.secret_key }), guard.check('theaterAdmin'), TheaterController.list, )

    /** POST - /api/theater - list theaters  */
    .post(jwt({ secret: config.secret_key }), TheaterController.list);


router.route('/:id')

    /** PUT - api/theater -update */
    .put(jwt({ secret: config.secret_key }), TheaterController.update)

    /** DELETE - api/theater - remove theater */
    .delete(jwt({ secret: config.secret_key }), TheaterController.remove);

export default router;