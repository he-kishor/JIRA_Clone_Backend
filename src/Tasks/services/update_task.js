const Task_Model = require('../../Models/taskmodel');

const updateTask =async({task_id,task_title, task_description,task_pipeline})=>{
    if (!task_id||!task_title || !task_description || !task_pipeline){
       throw({status:400, message:"Please provide all required fields"});
    }
    
   
    const task_data =await Task_Model.findByIdAndUpdate(
        task_id,

        {
            $set:{
                t_title:task_title,
                t_description:task_description,
                modified_time: Date.now(),
                t_pipelineName:task_pipeline
        
            }
        },
            {new:true,runValidators: true}

        );

    if (!task_data){
        throw({status:400,message:"Task not found"})
    }
    return task_data

};

module.exports = updateTask;