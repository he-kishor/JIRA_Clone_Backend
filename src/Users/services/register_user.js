require('dotenv').config();
const bcrypt=require('bcrypt');
const User = require('../../Models/userModel');

//register user
const registerUser = async({fname, lname, email, pass, role})=> {

    if (!fname || !lname || !email || !pass || !fname.trim() || !lname.trim() || !email.trim() || !pass.trim() || !role.trim()){
        
        throw({status:400, message:"Please provide all required fields"});

    }
    const emailfound = await User.findOne({email:email});
    const hasedPassword = await bcrypt.hash(pass,10);
    current_time= new Date();
    const newuser = await User.create({fname, lname, email, pass:hasedPassword, role,created_at:current_time });


    const userResponse = { ...newuser._doc};
    delete userResponse.pass;
    

    return userResponse //return user detail
}

module.exports = registerUser;