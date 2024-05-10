import { renderFeaturedPhones, renderPhones } from "./renderPhones.js";
import { showUserTab } from "./userTabFunction.js";
import { searchPhone } from "./searchFunction.js";

document.addEventListener("DOMContentLoaded", () => {
    // Assume user data is fetched and managed globally or elsewhere
    showUserTab();

    // Fetch phones data again here, just in case it's not handled by getter.js or for page-specific data handling
    fetch('/api/phones')
        .then((response) => response.json())
        .then((phones) => {
            console.log('Phones data:', phones);
            renderFeaturedPhones(phones.filter(phone => phone.featured));
            renderPhones(phones);
        })
        .catch((error) => console.error('Error fetching phones:', error));
    
    // Other event listeners and functions can be initialized here
});
