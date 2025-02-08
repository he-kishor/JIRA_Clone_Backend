require('dotenv').config();
const express=require('express');
const connecDB=require('./settings/DB/dbconnect');
const Routes=require('./src/routes');
const { logger } = require('./settings/middleware/auth_token');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const cookieParser = require("cookie-parser");
require('./src/Users/services/passport');

const app = express();
app.use(express.json());
app.use(logger);

app.use(cookieParser()) //Midleware to parse cookies
const allowedOrigins = [
  'http://localhost:3000',
  'https://taskmanageapp-production.up.railway.app'
];


app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        // Allow requests with no origin (like mobile apps or Postman) or listed origins
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
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
app.get('/',(req,res)=>{
  res.send("Hello guys")
})
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