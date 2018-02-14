
import express from 'express';
import jwt from 'express-jwt';
import config from './../../../cofig/config';
import AudiController from './../controllers/auditorium.controller'

var guard = require('express-jwt-permissions')()


const router = express.Router();

router.route('/:id')

    /** POST - /api/theater - list theaters  */
    .post( AudiController.create);


// router.route('/:id')

//     /** PUT - api/theater -update */
//     .put(jwt({ secret: config.secret_key }), AudiController.update)

//     /** DELETE - api/theater - remove theater */
//     .delete(jwt({ secret: config.secret_key }), AudiController.remove);

export default router;