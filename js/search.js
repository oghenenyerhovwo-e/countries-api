import {
    filterCountries,
} from "./helper.js"

document.addEventListener('DOMContentLoaded', async () => {
    const searchInput = document.getElementById('search_input');

    searchInput.addEventListener('change', (event) => {
        filterCountries();
    });
});
