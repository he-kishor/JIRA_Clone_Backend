// gateway/routes/users.js
const express = require('express');
const userRoutes = require('./Users/uroutes'); // Points to user service routes
const oauthroutes = require('./Users/oauthroutes');
const taskroutes = require('./Tasks/troutes');
const router = express.Router();


router.use('/users', userRoutes); // All /users-related routes will be forwarded to the user microservice
router.use('/oauth2',oauthroutes);
router.use('/task',taskroutes);


module.exports = router;