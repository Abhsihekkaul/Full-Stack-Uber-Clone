
// do not want to use the fixed port we want to know thorugh the environmental
// variable which ports to use 
// we are using dotenv and cors to set up our environmental variable

const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors')

const express = require("express");
const app = express();

app.use(cors());

// creating a route or just making it for the testing purposes

app.get('/',(req,res)=>{
    res.send("Hello world")
});


module.exports = app;