document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('toggle_mode');
    const moonIcon = document.getElementsByClassName('fa-moon')[0];
    const body = document.body;

    // Function to update the icon class based on the current mode
    const updateIconClass = () => {
        if (body.classList.contains('dark_mode')) {
            moonIcon.classList.add('fa-solid');
            moonIcon.classList.remove('fa-regular');
        } else {
            moonIcon.classList.add('fa-regular');
            moonIcon.classList.remove('fa-solid');
        }
    };

    // Check if user has a preference for dark mode and apply it
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
        body.classList.add('dark_mode');
    }
    // Update the icon class based on the initial mode
    updateIconClass();

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark_mode');
        // Save user preference to localStorage
        const isDarkMode = body.classList.contains('dark_mode');
        localStorage.setItem('darkMode', isDarkMode);
        // Update the icon class based on the new mode
        updateIconClass();
    });
});
