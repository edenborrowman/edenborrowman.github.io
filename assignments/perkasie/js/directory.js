// Directory Page JS

const requestmyjson = "perk.json";

fetch(requestmyjson)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
    const businesses = jsonObject['businesses'];
 
    for (let i = 0; i < businesses.length; i++) {
  

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let add1 = document.createElement('p');
      let add2 = document.createElement('p');
      let phone = document.createElement('p');
      let www = document.createElement('p');
      let image = document.createElement('img');
      let textd = document.createElement('div')
      let a = document.createElement('a');
      
     
      
      h2.textContent = businesses[i].name;
      add1.textContent = businesses[i].address1;  
      add2.textContent = businesses[i].address2;
      phone.textContent = businesses[i].phone;
      a.setAttribute('href', businesses[i].web_address);
      a.textContent = businesses[i].web_address;
      image.setAttribute('src', `images/${businesses[i].logo}`);
      image.setAttribute('alt', businesses[i].name + ' logo');
      image.setAttribute('class', 'directory_logo');
      card.setAttribute = ('class', 'directory_card');
      textd.setAttribute('class', 'div_text');
      
      
        card.appendChild(textd);
        textd.appendChild(h2);
         textd.appendChild(add1);
         textd.appendChild(add2);
         textd.appendChild(phone);
         textd.appendChild(a);
         textd.appendChild(www);
         textd.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }

    });



function gridtoggle() {
    document.getElementById("partners").classList.toggle("cards");
  }

//   function blocktoggle() {
//     document.getElementById("partners").classList.toggle("blockcards");
//   }