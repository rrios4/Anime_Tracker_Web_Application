const jwt = require('jsonwebtoken');

//Middleware function that can be added to any route that we want protected
module.exports = function auth (req, res, next){
    //Gets the token from the header that was defined when user logins
    const token = req.header('auth-token');
    //If it cannot find it then the user does not have access to that route
    if(!token){
        return res.status(401).send('Access Denied');
    }

    try{
        //If it can that mean the token is valid and they are able to access route
        const verified = jwt.verify(token, 'fgasdfgasdgasefd');
        req.user = verified;
        next();
    }catch(err){
        //If not we send a message with invalid token
        res.status(400).send('Invalid Token')
    }

}