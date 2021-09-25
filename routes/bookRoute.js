const express = require("express");
const router = express.Router();

var Book = require('../model/book');

router.get('/api/book', (req,res) =>{
    Book.getBooks((err, buk) => {
        if (err){
            throw err;
        }
        res.json(buk);
    });
});

router.get('/api/book/:_id', (req,res) =>{
    console.log(req.params._id)
    Book.getBook(req.params._id, (err, buk) => {
        if (err){
            throw err;
        }
        res.json(buk);
    });
});


// Add Genre
router.post('/api/book', (req, res) => {
    Book.addBook(req.body, (err, bookData) => {
        if (err){
            throw err;
        }
        res.json(bookData);
    })
});

// Update Genre
router.put('/api/book/:_id', (req, res) => {
    var id = req.params._id;
    var update = req.body;
    Book.updateBook(id, update, {}, (err, bookData) => {
        if (err){
            throw err;
        }
        res.json(bookData);
    })
});


router.delete('/api/book/:_id', (req,res) =>{
    console.log(req.params._id)
    Book.deleteBook(req.params._id, (err, buk) => {
        if (err){
            throw err;
        }
        res.json(buk);
    });
});


module.exports = router;