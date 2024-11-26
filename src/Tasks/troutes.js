const express = require('express');
const {create_Task, get_allTask} = require('./controllers');
const {authenticate} = require('../../settings/middleware/auth_token');
const router = express.Router();
//create task
router.post('/create_task',authenticate, create_Task);
//get all task
router.get('/get_alltask',authenticate,get_allTask)


module.exports = router;