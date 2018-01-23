var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: false
    },
});

export default mongoose.model('Movie', movieSchema);
