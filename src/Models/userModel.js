const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  lastLoginAt: { type: Date }    // Field for storing last login timestamp
});


const User_m=mongoose.model("Users_EVM",UserSchema);
module.exports=User_m;