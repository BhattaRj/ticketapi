import User from './../models/user.model';
import bcrypt from 'bcrypt';

/**
 * Register user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function register(req, res, next) {

    let user = new User();
    if (req.body.name)
        user.name = req.body.name;
    if (req.body.email)
        user.email = req.body.email;
    if (req.body.password)
        user.password = bcrypt.hashSync('req.body.password', 10);

    user.save()
        .then(user => res.json(user))
        .catch(e => next(e));
}


/**
 * Login user.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function login(req, res, next) {

    User.findOne({ email: req.body.email })
        .then(user => {

            if (!user)
                return next(new Error('Email not found.'));

            if (bcrypt.compareSync(bcrypt.hashSync('req.body.password', 10), user.password)) {

                console.log('matched');
                res.json(user);

                // Passwords match
            } else {
                console.log('not mateche');
                res.json(user);

                // Passwords don't match
            }

            // if (bcrypt.compareSync(req.body.password, user.password)) {

            // return next(new Error('Worng password'));
            // }



        })
        .catch(e => next(e));
}


export default {
    register,
    login
}
