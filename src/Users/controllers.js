
const  registerUser = require('./services/register_user');
const loginuser = require('./services/login_users');
const errorHandler = require('../../settings/error_handling/errorHandler');

//user register

const user_register = async (req, res) => {
try {
    const userResponse= await registerUser(req.body);
    res.status(201).json(userResponse);
} catch (error) {
    errorHandler(res,error);
   
   }
};

const login_user=async(req,res)=>{
    try{
      const loginresponse = await loginuser(req.body);
      //set httponly cookie
      res.cookie("auth_token",loginresponse.token,{
        httpOnly:true, // Ensures cookie cannot be accessed via JavaScript
        secure:true, // Ensures cookie is sent only over HTTPS
        sameSite:"Strict",//Prevents CSRF by restrictingcross-site usage
      })
      res.status(201).json(loginresponse.user);
          
         
      }
      catch(error){
          errorHandler (res,error);
     }
  
      
  };
module.exports ={user_register, login_user};