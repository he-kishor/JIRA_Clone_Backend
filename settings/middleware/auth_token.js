require("dotenv").config()
const jwt=require('jsonwebtoken');
const authenticate =(req,res,next)=>{
    //Extract toekn from httponly
    const token = req.cookies.token;
    console.log(req);
    
    
    if (!token) {
        return res.status(401).json({message:"Access Denied: No token provided"});
        }

    jwt.verify(token,process.env.jwtsecrettoken,(err,user)=>{
        if (err){
            return res.status(403).json({message:'Invalid or expired token'});

        }
        req.userid = user.id;
        req.headers.authorization = `Bearer ${token}`;
       
        next();
    });


};

const verifyAccessToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access token missing' });

    jwt.verify(token, process.env.jwtsecrettoken, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired access token' });
        }

        req.userid = user.id;  // User ID from access token
        
        next();
    });sta
};

const logger =(req,res,next)=>{
    console.log(`Logger2: ${req.method} Request recieved on ${req.url}`);
    next();
};
module.exports={authenticate, logger, verifyAccessToken};