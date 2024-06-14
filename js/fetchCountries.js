import {
    fetchCountries,
    displayCountriesCard,
} from "./helper.js"

document.addEventListener('DOMContentLoaded', async () => {
    const countries = await fetchCountries()
    displayCountriesCard(countries)
});
