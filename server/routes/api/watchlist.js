const express = require('express');
const verify = require('../authentication/verifyToken');
const watchlistsModel = require('../../models/watchlistModel');
const { ObjectId } = require('mongodb');

const router = express.Router();

// Get watchlist from mongo that matches with the user in collection with the correct id thats from the token when the user is logged in
router.get('/watchlist', verify, async (req, res) => { 
    await watchlistsModel.find({user: ObjectId(req.user._id)}).then(watchlist => {
        res.status(200).json(watchlist);
    });
    
    
});

module.exports = router;