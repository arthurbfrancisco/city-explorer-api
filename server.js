'use strict';

//  REQUIRE

// let data = require('./data/weather.json');
// const axios = require('axios');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const handleGetWeather = require('./modules/weather');
const handleGetMovies = require('./modules/movie');

//USE

const app = express();

//  PORT

app.use(cors());
const PORT = process.env.PORT || 3002;


app.get('/', (req, res) => {
  res.status(200).send('Hello there!');
});

app.get('/weather', handleGetWeather);
app.get('/movies', handleGetMovies);

// TRUST SHEYNA IT WORKS

app.get('*', (request, response) => {
  response.send('The thing you are looking for doesn\'t exist');
});

app.use((error, request, response, next) => {
  console.log(error.message)
  response.status(500).send(error.message)
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));



// //  PORT
// // Define the port on which your server will listen. process.env.PORT is useful for hosting services like Heroku
// const PORT = process.env.PORT || 3002;

// // ROUTES

// // Root route. When a GET request is made to the root of your website (http://localhost:3000/), it will respond with 'hello'

// // A route to say hello to a user. The name of the user is received as a query parameter
// app.get('/', (request, response) => {
//   response.send('hello');
// });

// app.get('/sayHello', (request, response) => {
//   console.log('hi');
//   console.log(request.query.firstName);
//   let firstName = request.query.firstName;
//   let lastName = request.query.lastName;
//   response.send(`hi ${firstName} ${lastName}`);


// // A route to return weather data for a particular city. The name of the city is received as a query parameter
// app.get('/weather',  (request, response, next) => {
//   // http://localhost:3000/weather?cityData=seattle
//   try {
    
//     let url = `http://localhost?key=${process.env.WEATHER_APP_KEY}&{request.query.lat}&lon=${request.query.lon}`
//     let weatherData = await axios.get(url);
    
//     let let weatherMap = parseWeathers(weather.Data.data);
//     weatherMap.then(weather => {
//       response.status(200).send(weather);
//     })
//   } catch (error) {
//     next(error);
//   }
// });

















// app.get('/movies', async (request, response, next) => 
// {
//   let movieMap = parseMovies(movieData.data.results);
//   console.log("HERE MOVIES: ", movieData.data.results);
//   movieMap.then(movie => {
//     response.status(200).send(movie);
//   })
// ) catch (error) {
//   console.log('HERE: ', error);

// }
// });

//     // Find the city in your JSON data that matches the city name from the query parameter
//     let city = data.find(cityData => cityData.city_name.toLowerCase() === searchQuery.toLowerCase())
//     //if (!city) {
//     //return response.status(404).send('City not found');
//     // Map the weather data for each day to a new instance of the Forecast class
//     // Get the first 3 days of data
//     //This slice(0, 3) will select the first three days from the city.data array. 
//     //If your city.data array does not have data for at least three days, this code will 
//     //return fewer than three days. If city.data is empty, threeDaysData will also be an empty array.
//     // let threeDaysData = city.data.slice(0, 3);
//     let dataMap = city.data.map(oneDay => new Forecast(oneDay));

//     // Send the mapped data back in the response
//     response.status(200).send(dataMap);
//   } catch (error) {
//     // If an error occurs in the try block, it will be passed to this catch block
//     next(error);
//   }
//   // app.use((err, req, res, next) => {
//   //   console.error(err.stack);
//   //   res.status(500).send('Something broke!');
// });

// // app.get('/movies', 'weather',(req, res,) => {
// //   console.log(req.query.searchQuery);
// //   // the thing user is using is for 
// //   let searchQuery = req.query.searchQuery;

// //   let url = https://?client_id=${}&query=&{searchQuery}&orientation=landscape'
// //   let dataArray = await axios.get(url);

// //   let dataArray = cityData.data.results.map(pic => new Result(pic));

// //   console.log(cityData.data.results);

// //   res.send(dataArray)
// //   //request from URL to an API
// //   //searchQuery user will type and send to backend, use the value and pass to URL

// // });


// // A catch-all route that will respond if no other route matches the request. This is useful for handling 404 errors.
// app.get('*', (request, response) => {
//   response.send('The thing you are looking for doesn\'t exist');
// });

// // //  CLASSES
// // // A class representing a weather forecast
// // class Forecast {
// //   constructor(day) {
// //     this.date = day.valid_date;
// //     this.description = day.weather.description;
// //     this.high = day.high_temp;
// //     this.low = day.low_temp;
// //   }
// // }

// // LISTEN 
// // Start the server listening on the defined port
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

// // Data is array with three objects: DESCRIPTION, locationIQ LAT,LON DATED BACK RESPONES BUILD MAP INFORMATION OF WEATHER
// //FORECAST IN DATA 1,2,3 DAYS, EXTRACT AND USE IT
// //ROUTE BACKEND WEATHER
// //REQUEST.QUERY should have : "lat": lon: searchQuery:""
// // concatanate : "description": "Low of 17.9" "date": "date": "2021-0401"


// // Get the first 3 days of data
// // let threeDaysData = city.data.slice(0, 3);
// // let dataMap = threeDaysData.map(oneDay => new Forecast(oneDay));
// // response.status(200).send(dataMap);
// // } catch (error) {
// // next(error);
// // }
// // });
// // app.get('*', (request, response) => {
// // response.send('The thing you are looking for doesn\'t exist');
// // });

// // let onlyDays = weather.data.slice(data.indexOf('' ,3) + 1);
// //results.push(onlyDays);