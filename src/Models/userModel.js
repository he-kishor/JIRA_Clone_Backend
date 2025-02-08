const mongoose = require('mongoose');
const Roles = require('./roles');
const UserSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String},
  role:{type:String, enum: Object.values(Roles), default:Roles.USER},
  googleId: { type: String },
  lastLoginAt: { type: Timestamp },  // Field for storing last login timestamp
  org_id: {type:String},
  team_id: {type:String},
  created_at:{type:Timestamp},

});


const User_m=mongoose.model("Users_EVM",UserSchema);
module.exports=User_m;