import User from './../models/user.model';

function list(req, res, next) {

    User.find()
        .then(users => res.json(users))
        .catch(e => nect(e));
}

function update(req, res, next) {

    User.findById(req.params.id)
        .then(user => {

            if (req.body.name)
                user.name = req.body.name

            if (req.body.email)
                user.email = req.body.email

            if (req.body.userType)
                user.userType = req.body.userType

            return user.save();

        })
        .then(user => res.json(user))
        .catch(e => next(e));
}


export default {
    list,
    update
}
