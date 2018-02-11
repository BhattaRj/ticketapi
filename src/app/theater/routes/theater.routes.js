
import express from 'express';
import jwt from 'express-jwt';
import config from './../../../cofig/config';
import TheaterController from './../controllers/theater.controller';

const router = express.Router();

router.route('/')

    /** GET - api/theate - create theater  */
    .get(TheaterController.list)

    /** POST - /api/theater - list theaters  */
    .post(jwt({ secret: config.secret_key }), TheaterController.list);


router.route('/:id')

    /** PUT - api/theater -update */
    .put(jwt({ secret: config.secret_key }), TheaterController.update)

    /** DELETE - api/theater - remove theater */
    .delete(jwt({ secret: config.secret_key }), TheaterController.remove);

export default router;