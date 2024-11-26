const Task_Model = require('../../Models/taskmodel');

const deleteTask = async({task_id})=>{
    if(!task_id){
        throw({status:400,message:"Please provide all required fields"})
    }
    const deletedTask = await Task_Model.findByIdAndDelete(task_id);

    // If the task is not found
    if (!deletedTask) {
      throw { status: 404, message: "Task not found" };
    }

    // Return a success message
    return { message: "Deleted the task successfully", task: deletedTask };

}

module.exports = deleteTask;
