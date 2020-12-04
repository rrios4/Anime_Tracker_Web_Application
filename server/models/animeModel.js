const mongoose = require('mongoose');
// Model for anime
const animeSchema = new mongoose.Schema({
    title: {type: String, default: null},
    synopsis: {type: String, default: null},
    episodes: {type: String, default: null},
    score: {type: String, default: null},
    type: {type: String, default: null},
    rating: {type: String, default: null},
    status: {type: String, default: null},
    aired: {type: Date, default: null},
    animeLink: {type: String, default: null},
},{ collection: 'anime' });

module.exports = mongoose.model('anime', animeSchema);