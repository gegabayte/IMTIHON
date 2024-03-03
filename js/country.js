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


window.addEventListener("load", (e) => {
    e.preventDefault();
    mask.classList.add("loader--hidin");
    setTimeout(() => {
        mask.remove();
    }, 2000);
});

btn && btn.addEventListener('click', function () {
    let fullUrl = window.location.href;
                    let index = fullUrl.search('index');
                    let beseUrl = fullUrl.substring(0, index);
                    window.location.assign(`${beseUrl}/index.html`);
})

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
        header.style.background = '#2B3844'
        hd.style.background = '#2B3844'
        hd.style.boxShadow = 'none'
        btn.style.boxShadow = 'none'
        btn1.style.boxShadow = 'none'
        btn2.style.boxShadow = 'none'
        btn3.style.boxShadow = 'none'
        btn.style.background = '#2B3844'
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

function createeCard (cout) {
    return `
    <div class="section__hero--img--part">
                <img src="${cout.flags.png}" width="560" height="401" alt="">
            </div>
            <div class="section__hero--data">
                <div class="section__hero--data--block">
                    <h1>${cout.name.common}</h1>
                   <div class="section__team">
                    <div class="section__hero--data--block1">
                        <p>Native Name: ${cout.name.nativeName}</p>
                            <p>Population: ${cout.population}</p>
                           <p>Region: ${cout.region}</p>
                            <p>Sub Region: ${cout.subregion}</p>
                            <p>Capital: ${cout.country.capital[0]}</p>
                    </div>
                    <div class="section__hero--data--block2">
                        <p>Top Level Domain: ${cout.cioc}</p>
                        <p>Currencies: ${cout.currencies}{</p>
                        <p>Languages: ${cout}, ${cout}, ${cout}</p>
                    </div>
                   </div>
                </div>
                <div class="section__hero--data--block3">
                    <h1>Border Countries: ${cout}</h1>
                    <div class="section__btn--part">
                        <button id="btn1">${cout}</button>
                        <button id="btn2">${cout}</button>
                        <button id="btn3">${cout}</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    `
}

document.addEventListener("DOMContentLoaded", function() {
    let slug = window.location.href.substring(window.location.href.search("id=")+3);

    fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (slug == data.name.slug) {
                let tr = createeCard(data);
                section.innerHTML = tr;
            }
        })
        .catch(err => {
            console.log(err);
        })
});