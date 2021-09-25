var mongoose = require('mongoose');

// Genre schema
var genrescheme = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date : {
        type : Date,
        default: Date.now
    }
}, { collection: 'genres'});

var genremodel = mongoose.model( 'GenresModel', genrescheme);
// module.exports = genremodel;

// get genres
module.exports.getGenres = (callback, limit) =>{
    genremodel.find(callback).limit(limit);
}

// get genre
module.exports.getGenre = (id, callback) =>{
    genremodel.findById(id, callback);
}

// Add Genre
module.exports.addGenre = (genre, callback) => {
    genremodel.create(genre, callback);
}

// update Genre
module.exports.updateGenre = (id, genre, options, callback) =>{
    var query = { "_id": id};
    var update = {
        name: genre.name
    }
    genremodel.findOneAndUpdate(query, update, options, callback);
}