// Give JS the address of the weather API with city code, imperial units, and APPID

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=31faaedc2de9ab98c63a927fb8525e85"

// Use Fetch to retrieve apiURL. Convert string to json object. Print to console log to check it works and evaluate what data is available to use.

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    
 // assign js Objects to elements by ID. Pay close attention to which data is in an array.
    document.getElementById('cond').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    document.getElementById('humid_pct').textContent = jsObject.main.humidity + "%";

// Use weather API data to calculate wind chill. Be sure to parseFloat to convert string data to numbers.
    let t = parseFloat(document.getElementById("temp").innerHTML);
    let w = parseFloat(document.getElementById("speed").innerHTML);
    
    // console.log(w);
    // console.log(t);
    
    if (t <= 50 && w >= 3) {
      let wc =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(w, 0.16) +
        0.4275 * t * Math.pow(w, 0.16);
    
      wc = document.getElementById("windchill_num").innerHTML =
        Math.round(wc) + "&deg; " + "F";
    } else {
      wc = "Not Applicable";
    
      document.getElementById("windchill_num").innerHTML = wc;
    }

//declare the weather icon address. Note how it's concatenated.

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  

const desc = jsObject.weather[0].description;  // note how we reference the weather array

document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only

document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method

document.getElementById('icon').setAttribute('alt', desc); //declare the alt for the icon

});

