
import Theater from './../models/theater.model';

function list(req, res, next) {

    let query = { isDeleted: false };
    Theater.find(query)
        .then(theaters => res.json(theaters))
        .catch(e => next(e));
}

function myList(req, res, next) {

    let query = { isDeleted: false };

    query.createdBy = req.user._id;

    Theater.find(query)
        .then(theaters => res.json(theaters))
        .catch(e => next(e));
}

function create(req, res, next) {

    let theater = new Theater();
    theater.createdBy = req.user._id;

    if (req.body.title)
        theater.title = req.body.title;
    if (req.body.address)
        theater.address = req.body.address;

    theater.save()
        .then(theater => res.json(theater))
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
    list,
    create,
    update,
    remove,
    myList
}