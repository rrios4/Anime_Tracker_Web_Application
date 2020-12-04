const express = require('express');
const mongoose = require('mongoose');
const animeModel = require('../../models/animeModel')

const router = express.Router();

// Get all anime from mongo
//No longer needed because I used Jikan API to get my anime information from.
router.get('/anime', async (req, res) => { 
    await animeModel.find().then(anime => {
        res.status(200).json(anime);
    });
});


module.exports = router;