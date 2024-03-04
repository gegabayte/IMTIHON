import { createCard } from "./function.js";
const darkMode = document.querySelector('#dark__mode');
const search = document.querySelector('#Search');
const select = document.querySelector('#select');
const hero = document.querySelector('#hero');
const mask = document.querySelector(".mask");
const header = document.querySelector("#header");
const hd = document.querySelector("#hd");



window.addEventListener("load", (e) => {
    e.preventDefault();
    mask.classList.add("loader--hidin");
    setTimeout(() => {
        mask.remove();
    }, 2000);
});

darkMode && darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    if (darkMode.classList.toggle("darkMode")) {
        search.style.background = '#2B3844'
        select.style.background = '#2B3844'
        document.body.style.background = '#202C36'
        document.body.style.color = 'white'
        document.body.style.transition = '0.8s'
        select.style.color = '#fff'
        header.style.background = '#2B3844'
        hd.style.background = '#2B3844'
        hd.style.boxShadow = 'none'
        select.style.boxShadow = 'none'
        search.style.boxShadow = 'none'
        hd.style.transition = '0.4s'
        
    } else {
        search.style.background = '#fff'
        select.style.background = '#fff'
        search.style.boxShadow = ''
        select.style.boxShadow = ''
        document.body.style.background = 'white'
        document.body.style.color = 'black'
        header.style.background = 'white'
        hd.style.background = 'white'
        hd.style.boxShadow = ''
        hd.style.zIndex = '2000'

    }
    document.body.classList.toggle("darkMode");
});



document.addEventListener('DOMContentLoaded', function () {
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries`, {
        method: "GET"
    })
        .then(res => {
            if (res.status == 200) {
                return res.json();
            }
        })
        .then(data => {
            data.data.forEach((country) => {
                let card = createCard(country);
                hero.innerHTML += card
                hero && hero.addEventListener('click', function ()  {
                    let fullUrl = window.location.href;
                    let index = fullUrl.search('index');
                    let beseUrl = fullUrl.substring(0, index);
                    window.location.assign(`${beseUrl}/pages/country.html`);
                })
            });
        })
        .catch(err => {
            console.log(err);
        })
})

search.addEventListener("keyup", function () {
    let value = search.value;
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${value}`
    )
      .then((data) => data.json())
      .then((data) => {
        hero.innerHTML = "";
        data.data.forEach((country) => {
          let card = `
          <div id="hero__card" class="hero__card" data-id="${country.area}">
          <img src="${country.flags.png}" alt="Flag photo" width="267" height="160">
          <div class="hero__card--child">
          <h4 id="name">${country.name.common}</h4>
              <p>Population: <span>${country.population.toLocaleString("en-IN")}</span></p>
              <p>Region: <span>${country.region}</span></p>
              <p>Capital: <span>${country.capital}</span></p>
          </div>
      `;
          hero.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      });
});
