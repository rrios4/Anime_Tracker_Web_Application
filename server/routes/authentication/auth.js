const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userModel = require('../../models/userModel');
const watchlistModel = require('../../models/watchlistModel');
const router = express.Router();
const {registerValidation, loginValidation} = require('./validation');
const { valid } = require('@hapi/joi');

//Register API
router.post('/register', async (req,res)=> {
    // Validate the data from req body using JOI
    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)    
    }

    //Checking if the user is alredy in the database
    const emailExist = await userModel.findOne({email: req.body.email});
    if(emailExist){
        return res.status(400).send('Email already exist!');
    }

    //Using Bctyptjs to hash the password entered
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user with imported model and define req body for all the values
    const user = new userModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: hashPassword,
        dob: req.body.dob

    });

    // Create variable that stores the response and sends it out and catched err. Also saves user
    try{
        const savedUser = await user.save();
        res.send({user: user._id})
    }catch(err){
        res.status(400).send(err);
    }
    //Create a new watchlist that was impoerted from its model
    const userWatchlist = new watchlistModel({
            user: user._id,
            watching: [
                {
                    title: null,
                    synopsis: null,
                    episodes: null,
                    score: null,
                    rank: null,
                    type: null,
                    studio: null,
                    rating: null,
                    status: null,
                    aired: null,
                    anime_url: null,
                    episode_count: null
                }
            ],
            plantowatch: [
                {
                    title: null,
                    synopsis: null,
                    episodes: null,
                    score: null,
                    rank: null,
                    type: null,
                    studio: null,
                    rating: null,
                    status: null,
                    aired: null,
                    anime_url: null,
                    episode_count: null,
                }
            ],
            onhold: [
                {
                    title: null,
                    synopsis: null,
                    episodes: null,
                    score: null,
                    rank: null,
                    type: null,
                    studio: null,
                    rating: null,
                    status: null,
                    aired: null,
                    anime_url: null,
                    episode_count: null,
                }
            ],
            dropped: [
                {
                    title: null,
                    synopsis: null,
                    episodes: null,
                    score: null,
                    rank: null,
                    type: null,
                    studio: null,
                    rating: null,
                    status: null,
                    aired: null,
                    anime_url: null,
                    episode_count: null,
                }
            ],
            completed: [
                {
                    title: null,
                    synopsis: null,
                    episodes: null,
                    score: null,
                    rank: null,
                    type: null,
                    studio: null,
                    rating: null,
                    status: null,
                    aired: null,
                    anime_url: null,
                    episode_count: null,
                }
            ]
    });

    try{
        const saveWatchlist = await userWatchlist.save();
    }catch(err){
        res.status(400).send(err);
    }
});

//Login API
router.post('/login', async (req, res) => {

    // Validate the data from req body using JOI from validation js
    const {error} = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)    
    }

    //Checking if the email is already in the database
    const user = await userModel.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Email is not found!');
    }
    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass){
        return res.status(400).send('Invalid Password')
    }

    //Create and assign token to keep the user signed in!
    const token = jwt.sign({_id: user._id}, 'fgasdfgasdgasefd' );
    res.header('auth-token', token).send({
        token: token
    });

    
});

//Getting logged in users info
router.get('/userinfo', async (req, res, next) => {
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let token = req.headers.token; //Grabs token that is sent from the client
    await jwt.verify(token, 'fgasdfgasdgasefd', (err, decoded) => {
        if(err) return res.status(401).json({
                title: 'Unauthorized'
            })
        //Token is valid then we look for user in my db and it response with user info
        userModel.findOne({ _id: decoded._id}, (err, user) => {
            if(err) return console.log(err)
            return res.status(200).json({
                title: 'User Info',
                user: {
                   email: user.email,
                   username: user.username.toUpperCase(),
                   firstName: user.firstName,
                   lastName: user.lastName,
                   joined: months[user.joined.getMonth()] + " " + user.joined.getDate() + ", " + user.joined.getFullYear()
                }
            })
        })
    })
});


module.exports = router;