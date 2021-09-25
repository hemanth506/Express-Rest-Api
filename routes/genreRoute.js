const express = require("express");
const router = express.Router();

Genre = require('../model/genre');

router.get('/api/genre', (req,res) =>{
    Genre.getGenres((err, genro) => {
        if (err){
            throw err;
        }
        res.json(genro);
    });
});

router.get('/api/genre/:_id', (req,res) =>{
    Genre.getGenre(req.params._id, (err, genro) => {
        if (err){
            throw err;
        }
        res.json(genro);
    });
});


// Add Genre
router.post('/api/genre', (req, res) => {
    Genre.addGenre(req.body, (err, genroData) => {
        if (err){
            throw err;
        }
        res.json(genroData);
    })
});


// Update Genre
router.put('/api/genre/:_id', (req, res) => {
    var id = req.params._id;
    var update = req.body;
    Genre.updateGenre(id, update, {}, (err, genroData) => {
        if (err){
            throw err;
        }
        res.json(genroData);
    })
});

module.exports = router;