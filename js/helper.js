export async function fetchCountries() {
    try {
        const response = await fetch('../data.json');
        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

export function displayCountriesCard(countries) {
    const countryList = document.getElementById('country_list');
    countryList.innerHTML = '';

    countries.forEach(country => {
        const {
            name,
            population,
            region,
            capital,
            flags,
        } = country

        const svgFlag = flags.png

        const card = document.createElement('div');
        card.classList.add('country_card');
        card.classList.add('card');

        const cardInnerHTML=`
            <img src="${svgFlag}" alt="${name} flag">
            <div class="country_card_body">
                <h2 class="spacing-sm">${name}</h2>
                <div class="country_card_body_details">
                    <div class="spacing-xs">
                        <h3>Population:</h3>
                        <p>${population}</p>
                    </div>
                    <div class="spacing-xs">
                        <h3>Region:</h3>
                        <p>${region}</p>
                    </div>
                    <div>
                        <h3>Capital:</h3>
                        <p>${capital}</p>
                    </div>
                </div>
            </div>
        `

        card.innerHTML = cardInnerHTML;
        card.addEventListener('click', () => {
            localStorage.setItem('selectedCountry', JSON.stringify(country));
            window.location.href = `../pages/country.html?country=${name.toLowerCase()}`;
        });
        countryList.appendChild(card);
    });
}

export async function filterCountries() {
    const response = await fetch('../data.json');
    const countries = await response.json(); 

    const toggleListText = document.getElementById('toggle_button_text');
    const searchInput = document.getElementById('search_input');

    const continent = toggleListText.innerHTML === "Filter by Region" ? "": toggleListText.innerHTML.toLowerCase()
    const searchQuery = searchInput.value.toLowerCase();

    const filteredCountriesByContinent = countries.filter(country => 
        country.region.toLowerCase().includes(continent)
    );

    const filteredCountriesByName = filteredCountriesByContinent.filter(country => 
        country.name.toLowerCase().includes(searchQuery)
    );
    displayCountriesCard(filteredCountriesByName);
}