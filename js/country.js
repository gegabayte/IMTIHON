import { createeCard } from "./function.js";
const darkMode = document.querySelector('#dark__mode');
const header = document.querySelector("#header");
const hd = document.querySelector("#hd");
const mask = document.querySelector(".mask");
const btn = document.querySelector("#btn");
const a = document.querySelector("#a");
const i = document.querySelector("#i");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const section = document.querySelector("#section");



//Loader
window.addEventListener("load", (e) => {
    e.preventDefault();
    mask.classList.add("loader--hidin");
    setTimeout(() => {
        mask.remove();
    }, 2000);
});


//back orqaga qaytish index sahifaga otish.
btn && btn.addEventListener('click', function () {
    let fullUrl = window.location.href;
                    let index = fullUrl.search('index');
                    let beseUrl = fullUrl.substring(0, index);
                    window.location.assign(`${beseUrl}/index.html`);
})



//Dark Mode.
darkMode && darkMode.addEventListener("click", (e) => {
    e.preventDefault();
    if (darkMode.classList.toggle("darkMode")) {
        document.body.style.background = '#202C36'
        document.body.style.color = 'white'
        document.body.style.transition = '0.8s'
        hd.style.transition = '0.4s'
        btn1.style.transition = '0.8s'
        btn2.style.transition = '0.8s'
        btn3.style.transition = '0.8s'
        btn.style.transition = '0.8s'
        btn.style.background = '#2B3844'
        header.style.background = '#2B3844'
        hd.style.background = '#2B3844'
        hd.style.boxShadow = 'none'
        btn.style.boxShadow = 'none'
        btn1.style.boxShadow = 'none'
        btn2.style.boxShadow = 'none'
        btn3.style.boxShadow = 'none'
        btn1.style.background = '#2B3844'
        btn2.style.background = '#2B3844'
        btn3.style.background = '#2B3844'
        btn1.style.color = 'white'
        btn2.style.color = 'white'
        btn3.style.color = 'white'
        i.style.color = 'white'
        a.style.color = 'white'
    } else {
        i.style.color = 'black'
        a.style.color = 'black'
        btn.style.color = 'black'
        btn.style.background = 'white'
        document.body.style.background = 'white'
        btn.style.boxShadow = ''
        document.body.style.color = 'black'
        header.style.background = 'white'
        hd.style.background = 'white'
        hd.style.boxShadow = ''
        btn1.style.background = 'white'
        btn2.style.background = 'white'
        btn3.style.background = 'white'
        btn1.style.color = 'black'
        btn2.style.color = 'black'
        btn3.style.color = 'black'
    }
    document.body.classList.toggle("darkMode");
});


