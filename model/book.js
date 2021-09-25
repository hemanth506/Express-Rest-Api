var mongoose = require('mongoose');

// Genre schema
var bookscheme = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    book_name : {
        type : String,
        required: true
    },
    genre : {
        type : String,
    }
}, { collection: 'books'});

var bookmodel = mongoose.model( 'bookModel', bookscheme);

// get books
module.exports.getBooks = (callback, limit) =>{
    bookmodel.find(callback).limit(limit);
}

// get book
module.exports.getBook = (id, callback, limit) =>{
    bookmodel.findById(id, callback);
}

// Add book
module.exports.addBook = (book, callback) =>{
    bookmodel.create(book, callback);
}

// update book
module.exports.updateBook = (id, book, options, callback) =>{
    var query = { "_id": id};
    var update = {
        author: book.author,
        book_name: book.book_name,
        genre: book.genre
    }
    bookmodel.findOneAndUpdate(query, update, options, callback);
}

// update book
module.exports.deleteBook = (id, callback) => {
    var query = { "_id": id};
    bookmodel.deleteOne(query, callback);
}