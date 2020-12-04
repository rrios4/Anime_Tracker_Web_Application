const { response } = require('express');
const express = require('express');
const userModel = require('../../models/userModel');

const router = express.Router();

// Get Users
router.get('/users', async (req, res) => {
    await userModel.find({}).then(users => {
        res.status(200).json(users);
    });
});

router.get('/user, async')

// Add User
router.post('/saveuser', (req, res, next) => {
    const body = req.body;
    if(body.content === undefined) {
        return res.status(400).json({error: 'content missing'})
    };
    const user = new userModel({

    });

    user.save().then(user => {
        res.json(user)
    })
})
// Update User
router.put('/updateuser', async (req, res,next) => {
    await userModel.find()
})
// Delete User


module.exports = router;