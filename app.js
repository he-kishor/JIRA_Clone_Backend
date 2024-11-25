require('dotenv').config();
const express=require('express');
const connecDB=require('./settings/DB/dbconnect');
const Routes=require('./src/routes');
const { logger } = require('./settings/middleware/auth_token');
const session = require('express-session');
const passport = require('passport');
require('./src/Users/services/passport');

const app = express();
app.use(express.json());
app.use(logger);


//middleware
// Session Middleware
app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: 'session secret',
    })
  );
  
  // Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
  
  // Add Custom Google Auth Routes
//user route
app.use("/api",Routes);
const PORT=process.env.PORT;

//connect db then server will start 
connecDB().then(()=>{
    app.listen(PORT,()=>{
        console.log('The server is running on the port 3003');
    });
})