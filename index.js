var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// import routers
var Book_route = require('./routes/bookRoute');
var Genre_route = require('./routes/genreRoute');

// should body-parse when post request
app.use(bodyParser.json())

// connect to mongodb
mongoose.connect("mongodb://localhost/bookstall", (err) => {
    if (err) {
        console.log("Error in mongoose connection");
    } else {
        console.log("Successfully connected with mongoose");
    }
})

app.get('/', (req, res) => {
    res.send('Please use api/books to get books or api/genre to get genres');
});

app.use('',Book_route);
app.use('',Genre_route);


app.listen(5001, () => console.log("Port is listening., Good to go!!"));