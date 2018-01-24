


import express from 'express';
import MovieRoute from './movie/movie.routes';

const router = express.Router();

router.route('/health-check')

    .get(function (req, res, next) {

        res.json({
            msg: 'okk'
        })
    });

router.use('/movie', MovieRoute);

export default router;


