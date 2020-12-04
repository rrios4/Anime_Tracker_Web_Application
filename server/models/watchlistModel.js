const mongoose = require('mongoose');
// This is the schema for my collection of MongoDB
const watchlistSchema = new mongoose.Schema({
    user: mongoose.ObjectId,
    watching: [
        {
            title: {type: String, default: null},
            synopsis: {type: String, default: null},
            episodes: {type: String, default: null},
            score: {type: String, default: null},
            rank: {type: String, default: null},
            type: {type: String, default: null},
            studio: {type: String, default: null},
            rating: {type: String, default: null},
            status: {type: String, default: null},
            aired: {type: Date, default: null},
            anime_url: {type: String, default: null},
            episode_count: {type: String, default: null},
        }
    ],
    plantowatch: [
        {
            title: {type: String, default: null},
            synopsis: {type: String, default: null},
            episodes: {type: String, default: null},
            score: {type: String, default: null},
            rank: {type: String, default: null},
            type: {type: String, default: null},
            studio: {type: String, default: null},
            rating: {type: String, default: null},
            status: {type: String, default: null},
            aired: {type: Date, default: null},
            anime_url: {type: String, default: null},
            episode_count: {type: String, default: null},
        }
    ],
    onhold: [
        {
            title: {type: String, default: null},
            synopsis: {type: String, default: null},
            episodes: {type: String, default: null},
            score: {type: String, default: null},
            rank: {type: String, default: null},
            type: {type: String, default: null},
            studio: {type: String, default: null},
            rating: {type: String, default: null},
            status: {type: String, default: null},
            aired: {type: Date, default: null},
            anime_url: {type: String, default: null},
            episode_count: {type: String, default: null},
        }
    ],
    dropped: [
        {
            title: {type: String, default: null},
            synopsis: {type: String, default: null},
            episodes: {type: String, default: null},
            score: {type: String, default: null},
            rank: {type: String, default: null},
            type: {type: String, default: null},
            studio: {type: String, default: null},
            rating: {type: String, default: null},
            status: {type: String, default: null},
            aired: {type: Date, default: null},
            anime_url: {type: String, default: null},
            episode_count: {type: String, default: null},
        }
    ],
    completed: [
        {
            title: {type: String, default: null},
            synopsis: {type: String, default: null},
            episodes: {type: String, default: null},
            score: {type: String, default: null},
            rank: {type: String, default: null},
            type: {type: String, default: null},
            studio: {type: String, default: null},
            rating: {type: String, default: null},
            status: {type: String, default: null},
            aired: {type: Date, default: null},
            anime_url: {type: String, default: null},
            episode_count: {type: String, default: null},
        }
    ]
},{ collection: 'watchlist' });
//Exports the model out to be used else where
module.exports = mongoose.model('watchlist', watchlistSchema);