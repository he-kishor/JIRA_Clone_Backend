const mongoose = require('mongoose');
const Task_dataSchema = new mongoose.Schema({
title:{type:String,required:true},
description:{type:String,required:true},
created_at:{type:Date, required:true},
updated_at:{type:Date},
created_by:{type:String, required:true},
assign_to:{type: String, required:true},
assigned_teamid: {type:String},
project_id:{type:String},
status:{type:String,required:true,enum: ["todo", "in progress", "done"]},

})

const Task_model = mongoose.model("Task_data",Task_dataSchema);
module.exports = Task_model;