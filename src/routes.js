// gateway/routes/users.js
const express = require('express');
const userRoutes = require('./Users/uroutes'); // Points to user service routes
const router = express.Router();
const oauthroutes = require('./Users/oauthroutes');
router.use('/users', userRoutes); // All /users-related routes will be forwarded to the user microservice
router.use('/oauth2',oauthroutes)


module.exports = router;