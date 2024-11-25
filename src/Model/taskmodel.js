const mongoose = require('mongoose');
const Task_dataSchema = new mongoose.Schema({
t_title:{type:String,required:true},
t_description:{type:String,required:true},
creat_time:{type:Date, required:true},
t_pipelineName:{type:String,required:true},
o_id:{type:String,required:true}

})

const Event_org = mongoose.model("Task_data",Task_dataSchema);
module.exports = Event_org;