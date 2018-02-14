
import Theater from './../models/theater.model';



function create(req, res, next) {

    Theater.findById(req.params.id)
        .then(theater => {
            let child = {};
            if (req.body.title)
                child.title = req.body.title;
            if (req.body.size)
                child.size = req.body.size;
            theater.auditoriums.push(child);
            return theater.save();
        })
        .then(theater => {
            res.json(theater)
        })
        .catch(e => next(e));
}

function update(req, res, next) {
    Theater.findById(req.params.id)
        .then(theater => {
            if (req.body.title)
                theater.title = req.body.title;
            if (req.body.address)
                theater.address = req.body.address;
            return theater.save();
        })
        .then(theater => res.json(theater))
        .catch(e => next(e));
}


function remove(req, res, next) {
    Theater.findById(req.params.id)
        .then(theater => {
            theater.isDeleted = true;
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