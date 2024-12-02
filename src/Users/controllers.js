
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
      const maxAge = 4 * 60 * 60 * 1000;
      console.log(loginresponse.token)
      res.cookie('authToken', loginresponse.token, {
        httpOnly: true, // Prevent client-side access
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict', // Helps prevent CSRF
        maxAge: maxAge, // Expiration in milliseconds
    });
      
      res.status(201).json(loginresponse.user);
          
         
      }
      catch(error){
          errorHandler (res,error);
     }
  
      
  };
module.exports ={user_register, login_user};