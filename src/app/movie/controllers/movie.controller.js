

import Movie from './../models/movie.model';

/**
 * Create movie
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function create(req, res, next) {

    console.log(req.body);

    let movie = new Movie();
    if (req.body.title)
        movie.title = req.body.title;
    if (req.body.language)
        movie.language = req.body.language
    movie.save()
        .then(movie => res.json(movie))
        .catch(e => res.json(e));

}

/**
 * List movies
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function list(req, res, next) {

    // res.send('dfd');
    Movie.find({}, function (err, data) {
        res.json(data);
    });
    // .then(moves => res.json(movies))
    // .catch(e => res.json(e));
}


export default {
    create,
    list
}