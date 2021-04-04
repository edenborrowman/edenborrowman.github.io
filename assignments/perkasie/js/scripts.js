const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px",
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

// Directory Page JS

const requestURL = "perk.json";

fetch(requestURL)
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
