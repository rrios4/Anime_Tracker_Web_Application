const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//const logger = require('logger');
require('dotenv').config()

// init the express app
const app = express();

// This is the connection that connects to a localhosted mongodb and creastes a db named animebin
// mongoose.connect('mongodb://localhost:27017/animebin', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
//     .then(result => {
//         console.log('Connected to mongoDB');
//     }) 
//     .catch((error) => {
//         console.error(error);
//     });

// Connect to the mongodb 
const url = process.env.MONGODB_URL;
console.log('Connecting to MONGODB Server...  ');
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('Connected to MongoDB!');
    })
    .catch((error) => {
        console.error(error);
    });



// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());


// Routes
app.use('/api', require('./routes/api/animes'));
app.use('/api', require('./routes/api/users'));
app.use('/api/user', require('./routes/api/watchlist'));
app.use('/api/user', require('./routes/authentication/auth'));
app.use('/api/user', require('./routes/api/watching'));
app.use('/api/user/increase', require('./routes/api/increase'));


// Error handling middleware
app.use(function(err, request, response, next) {
    //console.log(err);
    response.status(442).send({error: err.message});
});

// Handle for production
if(process.env.NODE_ENV === 'production'){
    // Static folder
    app.use(express.static(__dirname + '/dist'));

    // Handle SPA
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/dist/index.html'));
}
const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`Server started on port ${port}`));