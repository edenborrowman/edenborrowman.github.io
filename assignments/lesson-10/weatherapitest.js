// Give JS the address of the weather API with city code, imperial units, and APPID

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=31faaedc2de9ab98c63a927fb8525e85"

// Use Fetch to retrieve apiURL. Convert string to json object. Print to console log to check it works and evaluate what data is available to use.

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    console.log(jsObject);
    
const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
console.log(imagesrc);

document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
});