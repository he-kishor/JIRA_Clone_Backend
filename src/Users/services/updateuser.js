const User = require('../../Models/userModel');
const update_user_info= async(id,body)=>{
    try{
        

        const { email, fname, lname, role} = body;
            
        if ( !fname || !lname) {
                throw { status: 400, message: "All fields (email, fname, lname, role) must be provided" };
            }
        const user_up =await User.findByIdAndUpdate(
                id,
    
                {
                    $set:{
                        fname:fname,
                        lname:lname,

                        
                    }
                },
                {new:true}
            );
       
       return {
     
            u_id:user_up._id,
            email:user_up.email,
            fname:user_up.fname,
            lname:user_up.lname,
            role:user_up.role,

        
        
       }
    }
    catch (error){
       throw error;
      }
       
    };
    


module.exports = update_user_info;