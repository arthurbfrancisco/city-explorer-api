'use strict';

console.log('Our first server');

// THINGS (PACKAGES) I NEED TO INSTALL VIA THE TERMINAL
// TERMINAL: "Express", npm i express, npm i dotenv, nodemon(only instll one time for all time) npm -g nodemon, 

// Require: use require instead of import

// to create a server we bring in express
const express = require('express');

// need this to bring our variables from the env file
require('dotenv').config();
// USE 
// Once required we need to use it
// this is 2 steps for express
//app is an object with what we need
const app = express();


//PORT 
// DEFINE our port
// this is to make sure .env file is correctly wired up
const PORT = process.env.PORT || 3000;


// if there is problem with .env the server will fail run on 3000, do not use on 
//any port I have not use

// ROUTES 
// USE to access endpoint 

//we create a default route
// http://localhost:3000/
//app.get corrolate with axios.get
// app.get take the 2 arguments
// 1. url as string ('/')


//LISTEN 
// start our server
app.listen(PORT, () =>  console.log(`listening on ${PORT}`));







