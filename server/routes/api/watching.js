const express = require('express');
const jwt = require('jsonwebtoken')
const watchingModel = require('../../models/watchingModel');

const router = express.Router();

// Get all the anime that are in the users watching list using a token to identify user
router.get('/watching', async (req, res, next) => {
    let token = req.headers.token;
    await jwt.verify(token, 'fgasdfgasdgasefd', (err, decoded) => {
        if(err) return res.status(401).json({ title: 'Unauthorized'})

        watchingModel.find({ user: decoded._id}).then(userWatchingList => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(userWatchingList);
            
        });
    })
});

// Does a post request to the database to add anime that user selected that they wanted in their watchlist
router.post('/addtowatching', async(req, res,next) => {
    let token = req.headers.token; //gets token
    await jwt.verify(token, 'fgasdfgasdgasefd', (err, decoded) => {
        if(err) return res.status(401).json({ title: 'Unauthorized'})
        //Gets data from body to create entry for my collection.
        const watching = new watchingModel({
            user: decoded._id,
            mal_id: req.body.mal_id,
            url: req.body.url,
            image_url: req.body.image_url,
            title: req.body.title,
            airing: req.body.airing,
            synopsis: req.body.synopsis,
            type: req.body.type,
            episodes: req.body.episodes,
            score: req.body.score,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            members: req.body.members,
            rated: req.body.rated,
        });
        //It is saved to my mongodb
        watching.save()
                .then(data => {
                    res.json(data)
                })
                .catch(err => {
                    res.json({ message: err})
                });

    })
});

//This allows the user to delete an anime that is associated to them is I used paramns to identify the item to delete
router.delete('/:id', async(req, res) => {

        try{
            const removeAnime = await watchingModel.deleteOne({ _id: req.params.id} );
            res.json(removeAnime);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    
});
// This allows the user to update the epcounter of the show they have in their watching list
router.put('/:id', async (req,res) => {
    try{
        const decrease = await watchingModel.updateOne(
            { _id: req.params.id},
            {$set: {epcounter: req.body.epcounter}}
        );
        res.json(decrease);
    } catch(err){
        res.status(500).json({message: err.message })
    }
});


module.exports = router;