const Task_Model = require('../../Models/taskmodel');
//get user id
//get all data from task_model in response userid
//return this data 

const getallTask = async(userid)=>{
    const user_tasks = await Task_Model.find({u_id:userid})
    if (user_tasks.length<=0){
        throw({status:204,message:"No task available"});
    }

    return user_tasks

}

module.exports = getallTask;
