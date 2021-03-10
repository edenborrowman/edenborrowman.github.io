// Give JS the address of the weather API with city code, imperial units, and APPID

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=31faaedc2de9ab98c63a927fb8525e85"

// Use Fetch to retrieve apiURL. Convert string to json object. Print to console log to check it works and evaluate what data is available to use.

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
 // assign js Objects to elements by ID. Pay close attention to which data is in an array.
    document.getElementById('cond').textContent = jsObject.weather[0].main;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('speed').textContent = jsObject.wind.speed;
    document.getElementById('humid_pct').textContent = jsObject.main.humidity + "%";

// Use weather API data to calculate wind chill. Be sure to parseFloat to convert string data to numbers.
    let t = parseFloat(document.getElementById("temp").innerHTML);
    let w = parseFloat(document.getElementById("speed").innerHTML);
     
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
});


// List the URL of the API forecast data
const apiforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=31faaedc2de9ab98c63a927fb8525e85"

// As before, fetch the forecast data, create the JSON object, console log to make sure it worked.

fetch(apiforecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 

    
// Use API data to place names of next 5 days in table using a loop
   
    // step 1. Create new date object
    // step 2. Use .tolocaleString() to extract day name
    // step 3. Create subsequent 4 days (how do I do this with a loop???)
    
    
    const dateObject = new Date()
    const d1 = dateObject.toLocaleString('en-US', {weekday: "long"});
    console.log(d1);
        
    const plus1 = new Date(dateObject)
    plus1.setDate(plus1.getDate() + 1)
    d2 = plus1.toLocaleString('en-US', {weekday: "long"});
    console.log(d2);

    const plus2 = new Date(dateObject)
    plus2.setDate(plus2.getDate() + 2)
    d3 = plus2.toLocaleString('en-US', {weekday: "long"});
    console.log(d3);

    const plus3 = new Date(dateObject)
    plus3.setDate(plus3.getDate() + 3)
    d4 = plus3.toLocaleString('en-US', {weekday: "long"});
    console.log(d4);

    const plus4 = new Date(dateObject)
    plus4.setDate(plus4.getDate() + 4)
    d5 = plus4.toLocaleString('en-US', {weekday: "long"});
    console.log(d5);
 
    // Populate the table with responsive data

      document.getElementById("d1").textContent = d1;  
      document.getElementById("d2").textContent = d2;
      document.getElementById("d3").textContent = d3;
      document.getElementById("d4").textContent = d4;
      document.getElementById("d5").textContent = d5;
   

// Populate the temperature values in the 5 day by ID ??how to sort by date???

  document.getElementById('t1').textContent = jsObject.list[0].main.temp + "\°";
  document.getElementById('t2').textContent = jsObject.list[1].main.temp + "\°";
  document.getElementById('t3').textContent = jsObject.list[2].main.temp + "\°";
  document.getElementById('t4').textContent = jsObject.list[3].main.temp + "\°";
  document.getElementById('t5').textContent = jsObject.list[4].main.temp + "\°";


// Use API to change weather icons. Note that there are _two_ arrays to account for here!

    const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';
    const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';
    const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png';
    const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png';
    const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png';
          
    document.getElementById('imagesrc1').textContent = imagesrc1;
    document.getElementById('icon1').setAttribute('src', imagesrc1);
    document.getElementById('icon1').setAttribute('alt', jsObject.list[0].weather[0].description);

    document.getElementById('imagesrc2').textContent = imagesrc2;
    document.getElementById('icon2').setAttribute('src', imagesrc2);
    document.getElementById('icon2').setAttribute('alt', jsObject.list[1].weather[0].description);

    document.getElementById('imagesrc3').textContent = imagesrc3;
    document.getElementById('icon3').setAttribute('src', imagesrc3);
    document.getElementById('icon3').setAttribute('alt', jsObject.list[2].weather[0].description);

    document.getElementById('imagesrc4').textContent = imagesrc4;
    document.getElementById('icon4').setAttribute('src', imagesrc4);
    document.getElementById('icon4').setAttribute('alt', jsObject.list[3].weather[0].description);

    document.getElementById('imagesrc5').textContent = imagesrc5;
    document.getElementById('icon5').setAttribute('src', imagesrc5);
    document.getElementById('icon5').setAttribute('alt', jsObject.list[4].weather[0].description);



// const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);



});

