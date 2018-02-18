

import Show from './../models/show.model';

function list(req, res, next) {

    // let query = {};    

    // if (req.query.theaterId) {
    //     query.theater = {};
    //     query.theater.theater = req.query.theaterId
    // }

    Show.find()
        .then(shows => res.json(shows))
        .catch(e => nect(e));
}


function create(req, res, next) {

    let show = new Show();

    show.createdBy = req.user._id;

    if (req.body.title)
        show.title = req.body.title;


    if (req.body.date)
        show.date = req.body.date;

    if (req.body.movie)
        show.movie = req.body.movie;

    if (req.body.theater)
        show.theater = req.body.theater;

    if (req.body.seats)
        show.seats = req.body.seats;


    show.save()
        .then(show => res.json(show))
        .catch(e => next(e));
}

function update(req, res, next) {

    Show.findById(req.params.id)
        .then(show => {

            if (req.body.date)
                show.date = req.body.date;

            if (req.body.movie)
                show.movie = req.body.movie;

            if (req.body.theater)
                show.theater = req.body.theater;

            if (req.body.seats)
                show.seats = req.body.seats;

            if (req.body.title)
                show.title = req.body.title;

            return show.save();

        })
        .then(show => res.json(show))
        .catch(e => next(e));
}


export default {
    list,
    update,
    create,
}
