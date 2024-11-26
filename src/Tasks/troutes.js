const express = require('express');
const {create_Task, get_allTask, update_task, delete_task} = require('./controllers');
const {authenticate} = require('../../settings/middleware/auth_token');
const router = express.Router();
//create task
router.post('/create_task',authenticate, create_Task);

//get all task
router.get('/get_alltask',authenticate,get_allTask);

//update task
router.put('/update_task',authenticate,update_task);

//delete task
router.delete('/delete_task',authenticate,delete_task);



module.exports = router;