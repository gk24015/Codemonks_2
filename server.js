const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
mongoose.connect('mongodb+srv://gk24015:gulshankumar@cluster0-syi4f.mongodb.net/code?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
  }).then(() =>{
    console.log('Connected to db');
  }).catch(err=>{
    console.log("error",err.message);   
  });
// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/posts/",require("./routes/api/posts"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
