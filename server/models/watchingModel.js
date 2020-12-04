const { Int32, Double } = require('mongodb');
const mongoose = require('mongoose');
//Schema for watching list
const watchingSchema = new mongoose.Schema({
    user: mongoose.ObjectId,
    mal_id: {
        type: String,
        default: null
    
    },
    url: {
        type: String,
        default: null
    },
    image_url: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: null
    },
    airing: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: null
    },
    episodes:{
        type: String,
        default: null
    },
    score: {
        type: String,
        default: null
    },
    start_date: {
        type: Date,
        default: null
    },
    end_date: {
        type: Date,
        default: null
    },
    members: {
        type: String,
        default: null
    },
    rated: {
        type: String,
        default: null
    },
    epcounter: {
        type: String,
        default: 0
    }
},{collection: 'watching'});

module.exports = mongoose.model('watching', watchingSchema);
