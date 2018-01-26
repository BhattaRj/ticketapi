import express from 'express';
import MovieController from './controllers/movie.controller';

const router = express.Router();

router.route('/')

    /** GET /api/movie - return movies lsit */
    .get(MovieController.list)

    /** POST /api/movie - create movie  */
    .post(MovieController.create);

router.route('/:movieId')


    /** PUT /api/movie/movieid - update movie  */
    .put(MovieController.update)

    /** DELETE /api/movie/movieId - delete movie */
    .delete(MovieController.remove);


export default router;
