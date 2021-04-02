const requestURL = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    // loop through array
    for (let i = 0; i < prophets.length; i++) {
    // declare each variable for what the card will need
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let line1 = document.createElement('p');
      let line2 = document.createElement('p');
      let image = document.createElement('img');
      
      // Sets out what each card will show and concatenates the strings
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      line1.textContent = 'Born:' + ' ' + prophets[i].birthdate;  
      line2.textContent = 'Place:' + ' ' + prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl,);
      image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " " + "-" + " " + prophets[i].order);
      
      // build the display by updating for each item in the loop
         card.appendChild(h2);
         card.appendChild(line1);
         card.appendChild(line2);
         card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }

    });
