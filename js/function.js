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
                    <h1>Border Countries: ${cout.borders}</h1>
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
function createCard(country) {
    return `
        <div id="hero__card" class="hero__card" data-id="${country.area}">
        <img src="${country.flags.png}" alt="Flag photo" width="267" height="160">
        <div class="hero__card--child">
        <h4 id="name">${country.name.common}</h4>
            <p>Population: <span>${country.population.toLocaleString("en-IN")}</span></p>
            <p>Region: <span>${country.region}</span></p>
            <p>Capital: <span>${country.capital}</span></p>
        </div>
    `
}

export { createeCard ,  createCard }