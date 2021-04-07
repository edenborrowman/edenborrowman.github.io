const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3720&lon=-75.2927&exclude=hourly,minutely&lang=us-en&appid=31faaedc2de9ab98c63a927fb8525e85&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    jo=jsObject;

//CURRENT WEATHER
    document.getElementById("cond").textContent = jo.current.weather[0].main;
    document.getElementById("temp").textContent = Math.round(jo.current.temp);
    document.getElementById("speed").textContent = Math.round(jo.current.wind_speed);
    document.getElementById("humid_pct").textContent = jo.current.humidity + "%";
    document.getElementById("weather_alert").textContent = jo.alerts[0].description;

 //WINDCHILL

    let t = jo.current.temp;
    let w = current.wind_speed;

    if (t <= 50 && w >= 3) {
      let wc = 35.74 + 0.6215 * t - 35.75 * Math.pow(w, 0.16) + 0.4275 * t * Math.pow(w, 0.16);

      wc = document.getElementById("windchill_num").innerHTML = Math.round(wc) + "&deg; " + "F";
    } 
    else {
      wc = "Not Applicable";

      document.getElementById("windchill_num").innerHTML = wc;
    }
   
//THREE DAY FORECAST DATA


    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let d = new Date();
    let d_name1 = dayName[(d.getDay() + 1) % 7];
    let d_name2 = dayName[(d.getDay() + 2) % 7];
    let d_name3 = dayName[(d.getDay() + 3) % 7];

    document.getElementById("day1").textContent = d_name1;
    document.getElementById("day2").textContent = d_name2;
    document.getElementById("day3").textContent = d_name3;
    


    let d1 = jo.daily[1].temp.day;
    let d2 = jo.daily[2].temp.day;
    let d3 = jo.daily[3].temp.day;

    document.getElementById("forecast1").textContent = Math.round(d1) + " °F";
    document.getElementById("forecast2").textContent = Math.round(d2) + " °F";
    document.getElementById("forecast3").textContent = Math.round(d3) + " °F";

    let i1 = jo.daily[1].weather[0].icon;

    var imagesrc1 = "https://openweathermap.org/img/w/" + jo.daily[1].weather[0].icon +
        ".png";
    var imagesrc2 = "https://openweathermap.org/img/w/" + jo.daily[2].weather[0].icon +
        ".png";
    var imagesrc3 = "https://openweathermap.org/img/w/" + jo.daily[3].weather[0].icon +
        ".png";

    document.getElementById("img1").textContent = imagesrc1;
    document.getElementById("icon1").setAttribute("src", imagesrc1);
    document.getElementById("icon1").setAttribute("alt", "filler");    

    document.getElementById("img2").textContent = imagesrc2;
    document.getElementById("icon2").setAttribute("src", imagesrc2);
    document.getElementById("icon2").setAttribute("alt", "filler");  
    
    document.getElementById("img3").textContent = imagesrc3;
    document.getElementById("icon3").setAttribute("src", imagesrc3);
    document.getElementById("icon3").setAttribute("alt", "filler");    
   
    
  });

  // WEATHER ALERT
function windowclose() {
  document.getElementById("alert_div").setAttribute("id", "dismiss");
}
  
  


