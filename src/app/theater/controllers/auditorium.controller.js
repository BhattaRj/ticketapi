
import Theater from './../models/theater.model';

let loc = {};


function create(req, res, next) {

    Theater.findById(req.params.id)
        .then(theater => {

            let child = {};

            if (req.body.title)
                child.title = req.body.title;
            if (req.body.size)
                child.size = req.body.size;
            loc.audi = theater.auditoriums.create(child);
            theater.auditoriums.push(loc.audi);
            return theater.save();
        })
        .then(theater => {
            res.json(loc.audi);
        })
        .catch(e => next(e));
}

function update(req, res, next) {

    Theater.findById(req.params.id)
        .then(theater => {

            var audi = theater.auditoriums.id(req.params.audiId);

            if (req.body.title)
                audi.title = req.body.title;
            if (req.body.address)
                audi.size = req.body.size;

            return theater.save();
        })
        .then(theater => {
            res.json(theater.auditoriums.id(req.params.audiId));
        })
        .catch(e => next(e));
}


function remove(req, res, next) {
    Theater.findById(req.params.id)
        .then(theater => {
            theater.auditoriums.id(req.params.audiId).remove();
            return theater.save();
        })
        .then(theater => res.json(theater))
        .catch(e => next(e));
}

export default {
    create,
    update,
    remove
}