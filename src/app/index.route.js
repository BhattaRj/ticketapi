import express from 'express';

import MovieRoute from './movie/movie.routes';
import AuthRoute from './auth/auth.routes';
import FileRoute from './file/file.route';
import TheaterRoute from './theater/routes/theater.routes';
import AudiRoute from './theater/routes/auditorium.routes';


const router = express.Router();

router.route('/health-check').get((req, res, next) => {
    res.json({
        msg: 'okk'
    })
});

router.use('/movie', MovieRoute);
router.use('/auth', AuthRoute);
router.use('/file', FileRoute);
router.use('/theater', TheaterRoute);
router.use('/autitorium', AudiRoute);


export default router;


