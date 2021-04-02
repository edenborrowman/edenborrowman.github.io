// //FIVE DAY FORECAST DATA

// // List the URL of the API forecast data
// const apiforecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3720&lon=-75.2927&exclude=hourly,minutely&lang=us-en&appid=31faaedc2de9ab98c63a927fb8525e85&units=imperial";

// // As before, fetch the forecast data, create the JSON object, console log to make sure it worked.
// fetch(apiforecastURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//       console.log(jsObject);
//     // Create an array with day names to use for five day forecast
//     const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     // Filter the jsObject to only show data from 6:00 pm (18:00:00)
//     const fc = jsObject;

//     // Use a "for" loop to loop through the data and fill the table
//     let day = 0;
//     let i = 0;

//     for (i = 0; i < fc.length; i++) {
//       let d = new Date(fc[i].dt_txt); //date object to get date

//       //write day name using array built earlier
//       document.getElementById("dayofweek" + (day + 1)).textContent =
//         dayName[d.getDay()];

//       // write temperature data. Use Math.round to make it a whole number.
//       document.getElementById("forecast" + (day + 1)).textContent =
//         Math.round(thefive[day].main.temp) + " °F";

//       // give the browser the icon address
//       var imagesrc =
//         "https://openweathermap.org/img/w/" +
//         thefive[day].weather[0].icon +
//         ".png";

//       // populate table with icons, set alt attribute using weather description from the object
//       document.getElementById("imagesrc" + (day + 1)).textContent = imagesrc;
//       document.getElementById("icon" + (day + 1)).setAttribute("src", imagesrc);
//       document
//         .getElementById("icon" + (day + 1))
//         .setAttribute("alt", thefive[0].weather[0].description);

//       day++;
//     }
//   });