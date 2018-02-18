
import express from 'express';
import jwt from 'express-jwt';
import config from './../../cofig/config';

import ShowController from './controllers/show.controller';

var guard = require('express-jwt-permissions')()


const router = express.Router();

router.route('/')

    /** GET - api/theate - create theater  */
    .get(ShowController.list, )

    /** POST - /api/theater - list theaters  */
    .post(jwt({ secret: config.secret_key }), ShowController.create);


router.route('/:id')

    /** PUT - api/theater -update */
    .put(ShowController.update)

    /** DELETE - api/theater - remove theater */
    // .delete(jwt({ secret: config.secret_key }), ShowController.remove);

export default router;