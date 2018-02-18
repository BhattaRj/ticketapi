
import express from 'express';
import UserController from './controllers/user.controller';
const router = express.Router();
router.route('/')

    /** GET /api/user - list users. */
    .get(UserController.list);

router.route('/:id')

    /** PUT /api/user -login user */
    .put(UserController.update);


export default router;