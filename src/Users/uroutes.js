// services/users/routes/user_routes.js
const express = require('express');
const { user_register, login_user} = require('./controllers');
const {authenticate} = require('../../settings/middleware/auth_token');
const {checkEmail} = require('../../settings/middleware/check_valid_email');
const router = express.Router();
router.post('/signup',checkEmail, user_register);
router.post('/login',login_user);
//check authenticate method
router.get('/checkauth',authenticate,(req,res)=>{
    try{
        res.status(200).json({message:"Authenticate"});
    }
    catch{
        res.status(500).json({message:"Internal Error"});
    }
});

module.exports = router;
