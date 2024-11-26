const errorHandler = require('../../settings/error_handling/errorHandler');
const createtask = require('./services/create_task');
const getallTask = require('./services/get_alltask');
const updateTask = require('./services/update_task');
const deleteTask = require('./services/delete_task');

//create task
const create_Task = async(req,res)=>{
    try{
        const id = req.userid;
        const taskData = await createtask(id,req.body);
        res.status(200).json(taskData);
        
    }
    catch (error) {
        errorHandler(res,error);
       
       }
};

// get all task base on userid
const get_allTask = async(req,res)=>{
    try{
        const id = req.userid;
        const usersTask = await getallTask(id);
        res.status(200).json(usersTask);
    }
    catch(error){
        errorHandler(res,error);
    }
}

//updating task
const update_task = async(req,res)=>{
    try{
        const tasks = await updateTask(req.body);
        res.status(200).json(tasks);

    }
    catch(error){
        errorHandler(res,error);
    }
}
 
//deleting task
const delete_task = async(req,res)=>{
    try{
        const deltasks = await deleteTask(req.body);
        res.status(200).json(deltasks);

    }
    catch(error){
        errorHandler(res,error);
    }
}

module.exports ={create_Task, get_allTask, update_task, delete_task};