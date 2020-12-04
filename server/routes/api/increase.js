const express = require('express');
const watchingModel = require('../../models/watchingModel');

const router = express.Router();
// This allows the user to update the epcounter of the show they have in their watching list
//Made a seperate js file for this because its the exact same as the one in watching.js but this is only requested by the increase method that I have in the front end with axios
router.put('/:id', async (req,res) => {
    try{
        const increase = await watchingModel.updateOne(
            { _id: req.params.id},
            {$set: {epcounter: req.body.epcounter}}
        );
        res.json(increase);
    } catch(err){
        res.status(500).json({message: err.message })
    }
});

module.exports = router;