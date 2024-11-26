const mongoose = require('mongoose');
const Task_dataSchema = new mongoose.Schema({
t_title:{type:String,required:true},
t_description:{type:String,required:true},
modified_time:{type:Date, required:true},
t_pipelineName:{type:String,required:true,enum: ["todo", "in progress", "done"]},
u_id:{type:String,required:true}

})

const Task_model = mongoose.model("Task_data",Task_dataSchema);
module.exports = Task_model;