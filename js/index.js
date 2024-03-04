import { createCard } from "./function.js";
const darkMode = document.querySelector('#dark__mode');
const search = document.querySelector('#Search');
const select = document.querySelector('#select');
const hero = document.querySelector('#hero');
const mask = document.querySelector(".mask");
const header = document.querySelector("#header");
const hd = document.querySelector("#hd");


//Loader
window.addEventListener("load", (e) => {
    e.preventDefault();
    mask.classList.add("loader--hidin");
    setTimeout(() => {
        mask.remove();
    }, 2000);
});


//Dark Mode
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
        select.style.color = 'black'
        search.style.background = '#fff'
        select.style.background = '#fff'
        search.style.boxShadow = ''
        select.style.boxShadow = ''
        document.body.style.background = 'white'
        document.body.style.color = 'black'
        header.style.background = 'white'
        hd.style.background = 'white'
        hd.style.boxShadow = ''

    }
    document.body.classList.toggle("darkMode");
});


//250ta malumotni olib kelb yuvay ga chiqarish
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
            hero.innerHTML += card;
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



// Qidiruv Davlatlarni qidiradi.
search.addEventListener("keyup", function () {
    let value = search.value;
    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?search=${value}`, {
        method: "GET"
    })
      .then((data) => data.json())
      .then((data) => {
        hero.innerHTML = "";
        data.data.forEach((country) => {
          let card = createCard(country)
          hero.innerHTML += card;
        });
      })
      .catch((err) => {
        console.log(err);
      });
});


//filter Region boyicha saraleydi
select.addEventListener('change', function() {
    let value = select.value

    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?region=${value}`, {
        method: "GET"
    })

    .then((data) => data.json())

    .then(data => {
        console.log(data);
        hero.innerHTML = ''
        data.data.forEach(country => {
            let card = createCard(country);
            hero.innerHTML += card;
        });
    })
})