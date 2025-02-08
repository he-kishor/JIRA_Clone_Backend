const User =require('../../src/Models/userModel');

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

//Middleware to check email format and exitance
const checkEmail = async (req,res,next) => {
    const {email} = req.body;
    if (!email){
        return res.status(400).json({message:"Email is required"});

    }
    
    if(!validateEmail(email)){
        return res.status(400).json({message:'Invalid Email Format'});

    }

    try{
        // check if the email exits in the database
        const exitsuser = await User.findOne({email});
        if (exitsuser){
            return res.status(400).json({message:"This email is already registered."});

        }
        next();

    }
    catch(error){
        return res.status(500).json({message:"Internal error Occurs"})
    }

    
}

module.exports = {checkEmail};