const express = require('express');
const { create_Task} = require('./controllers');
const {authenticate} = require('../../settings/middleware/auth_token');
const router = express.Router();
router.post('/create_task',authenticate, create_Task);


module.exports = router;