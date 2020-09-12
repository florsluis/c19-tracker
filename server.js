//import statements 
const mongoose = require("mongoose");//
const express = require("express");//server
const router = express.Router();//Mongo Router/endpoint
const cors = require("cors");//security cross origin
const passport = require("passport");//authentication library
const passportLocal = require("passport-local").Strategy;//using local
const cookieParser = require("cookie-parser");//parse all the cookies using for authentication
const bcrypt = require("bcryptjs");//hashing the passwords
const session = require("express-session");//express sessions
const bodyParser = require("body-parser");//parse request and response object- use in middleware
const User = require('user');
let mandates = require("./model");
const app = express();

//const PORT = process.env.PORT || 3001;

// Middleware - express first two code lines are needed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//important to this code -- need this in order for this to work with credentials
app.use(
    cors({
        origin: "http://localhost:3000", //<-- location of the react app we are connecting to
        credentials: true
    })
);

// Add routes, both API and view
app.use(routes);

// Connect to MongoDB
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/travelstates";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});