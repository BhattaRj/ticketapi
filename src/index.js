

import express from 'express';
import mongoose from 'mongoose';
import config from './cofig/config';
import routes from './app/index.route';

const app = express()

mongoose.connect(config.mongohost);

var db = mongoose.connection;

db.on('error', function (e) {
    console.log(e);
})

db.once('open', function () {
    console.log('Connected to database...');
});


app.use('/api', routes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))