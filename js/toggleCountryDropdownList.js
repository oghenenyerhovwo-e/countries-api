import {
    filterCountries,
} from "./helper.js"

document.addEventListener('DOMContentLoaded', async () => {
    const toggleListButton = document.getElementById('toggle_button');
    const dropdownList = document.getElementById('dropdown_list');
    
    toggleListButton.addEventListener('click', () => {
        dropdownList.classList.toggle('countries_filter_dropdown_list_show');
    });
});

document.addEventListener('DOMContentLoaded', async () => {
    const toggleListText = document.getElementById('toggle_button_text');
    const dropdownListButtons = document.getElementsByClassName('countries_filter_dropdown_list_btn');
    const dropdownList = document.getElementById('dropdown_list');

    for (let index = 0; index < dropdownListButtons.length; index++) {
        const dropdownListBtn = dropdownListButtons[index];
        
        dropdownListBtn.addEventListener('click', () => {
            toggleListText.innerHTML = dropdownListBtn.innerHTML === "All" ? "Filter by Region" : dropdownListBtn.innerHTML
            dropdownList.classList.remove('countries_filter_dropdown_list_show');
            filterCountries()            
        });
    }
});