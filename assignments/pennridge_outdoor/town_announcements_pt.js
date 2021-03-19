// Give the address of the API data

const townURL = "https://byui-cit230.github.io/weather/data/towndata.json"

// Use fetch to retreive data from API. Convert string to JSON object.

fetch(townURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {

const towns = jsonObject['towns'];

// Filter results to just show the three towns I want
const result = towns.filter(towns => towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs');

// console.log(result);
// Loop through the array, find data I need, declare variables



for(var i=0; i<result.length; i++){

    if (result[i].name == "Fish Haven"){
            
            let card = document.createElement('section');
            const h2 = document.createElement('h2');
            let e1 = document.createElement('p');
            let e2 = document.createElement('p');
            let e3 = document.createElement('p');
            let e4 = document.createElement('p');
            let textdiv = document.createElement('div')
   
// Create announcement, concatenate strings, and declare classes to make CSS easier; append page.
    
    e1.textContent = result[i].events[0];
    e2.textContent = result[i].events[1];
    e3.textContent = result[i].events[2];
    e4.textContent = result[i].events[3];
    e1.setAttribute = ('class', 'event_date');
    e2.setAttribute = ('class', 'event_date');
    e3.setAttribute = ('class', 'event_date');
    e3.setAttribute = ('class', 'event_date');
    textdiv.setAttribute('class', 'ann_text');

    
    card.appendChild(textdiv);
    textdiv.appendChild(h2);
    textdiv.appendChild(e1);
    textdiv.appendChild(e2);
    textdiv.appendChild(e3);
    textdiv.appendChild(e4);
  
    document.querySelector('div.contentbox').appendChild(card);
    break;
    }}
    })