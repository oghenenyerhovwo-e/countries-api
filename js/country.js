import {
    fetchCountries,
} from "./helper.js"

document.addEventListener('DOMContentLoaded', async () => {
    const url = new URL(window.location.href)
    const searchedCountry = url.searchParams.get("country")

    const countryFlag = document.getElementById('country_flag');
    const countryName = document.getElementById('country_name');
    const countryNativeName = document.getElementById('native_name');
    const countryPopulation = document.getElementById('population');
    const countryRegion = document.getElementById('region');
    const countrySubRegion = document.getElementById('subregion');
    const countryCapital = document.getElementById('capital');
    const countryTopLevelDomain = document.getElementById('top_level_domain');
    const countryCurrencies = document.getElementById('currencies');
    const countryLanguages = document.getElementById('languages');
    const countryBorderCountries = document.getElementById('border_countries');

    const countries = await fetchCountries()
    const country = countries.find(country => country.name.toLowerCase() === searchedCountry)

    let languages = ""

    for (let index = 0; index < country.languages.length; index++) {
        const language = country.languages[index];
        languages = `${languages} ${language.name},`
    }

    country.borders.forEach(border => {
        const borderCountry = countries.find(country => country.alpha3Code === border)
        if(borderCountry){
            const card = document.createElement('div');
            card.classList.add('border_country_card');
            card.classList.add('card');

            card.innerHTML=borderCountry.name

            countryBorderCountries.appendChild(card);
        }
    });

    countryFlag.src= country.flags.png
    countryFlag.alt= `${country.name} flag`

    countryName.innerHTML= country.name
    countryNativeName.innerHTML= country.nativeName
    countryPopulation.innerHTML= country.population
    countryRegion.innerHTML= country.region
    countrySubRegion.innerHTML= country.subregion
    countryCapital.innerHTML= country.capital
    countryTopLevelDomain.innerHTML= country.topLevelDomain[0]
    countryCurrencies.innerHTML= country.currencies[0].name
    countryLanguages.innerHTML= languages.slice(0,-1)
});
