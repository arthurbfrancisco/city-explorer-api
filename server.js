'use strict';

console.log('our first server');
//  REQUIRE

// Include the express library which is a minimal and flexible Node.js web application framework
const express = require('express');
// Include the dotenv library which loads environment variables from a .env file into process.env
require('dotenv').config();
// Include the data from your local JSON file (weather data)
let data = require('./data/weather.json');
// Include the CORS library to enable Cross Origin Resource Sharing
const cors = require('cors');

//USE
// Create an instance of express
const app = express();

// Use CORS as a middleware
app.use(cors());


//  PORT
// Define the port on which your server will listen. process.env.PORT is useful for hosting services like Heroku
const PORT = process.env.PORT || 3002;

// ROUTES

// Root route. When a GET request is made to the root of your website (http://localhost:3002/), it will respond with 'hello'

// A route to say hello to a user. The name of the user is received as a query parameter
app.get('/', (request, response) => {
  response.send('hello');
});

app.get('/sayHello', (request, response) => {
  console.log('hi');
  console.log(request.query.firstName);
  let firstName = request.query.firstName;
  let lastName = request.query.lastName;
  response.send(`hi ${firstName} ${lastName}`);
});

// A route to return weather data for a particular city. The name of the city is received as a query parameter
app.get('/weather', (request, response, next) => {
  // http://localhost:3000/weather?cityData=seattle
  try {
    console.log('hi');
    let searchQuery = request.query.cityData;
    // Find the city in your JSON data that matches the city name from the query parameter
    let city = data.find(cityData => cityData.city_name.toLowerCase() === searchQuery.toLowerCase())

    // Map the weather data for each day to a new instance of the Forecast class
    let dataMap = city.data.map(oneDay => new Forecast(oneDay));

    // Send the mapped data back in the response
    response.status(200).send(dataMap);
  } catch (error) {
    // If an error occurs in the try block, it will be passed to this catch block
    next(error);
  }
});

// A catch-all route that will respond if no other route matches the request. This is useful for handling 404 errors.
app.get('*', (request, response) => {
  response.send('The thing you are looking for doesn\'t exist');
});

//  CLASSES

// A class representing a weather forecast
class Forecast {
  constructor(day) {
    this.date = day.valid_date;
    this.description = day.weather.description;
    this.high = day.high_temp;
    this.low = day.low_temp;
  }
}

// LISTEN 
// Start the server listening on the defined port

app.listen(PORT, () => console.log(`listening on ${PORT}`));

// Data is array with three objects: locationIQ LAT/LON BACK RESPONES BUILD MAP INFORMATION OF WEATHER
//FORECAST IN DATA 1,2,3 DAYS, EXTRACT AND USE IT
//ROUTE BACKEND WEATHER

//REQUEST.QUERY should have : "lat": lon: searchQuery:""
// concatanate : "description": "Low of 17.9" "date": "date": "2021-0401"
