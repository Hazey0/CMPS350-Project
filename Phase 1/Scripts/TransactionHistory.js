import { logged } from "./LogFunction.js";
import { showUserTab } from "./userTabFunction.js";

document.addEventListener("DOMContentLoaded", ()=> {
    // Check if user is logged in
    const userData = localStorage.getItem('users'); // Assuming user data is stored under 'user' key
    const user = JSON.parse(userData);

    if (!user) {
        alert('Please log in to view your transactions.');
        window.location.href = 'login.html'; // Redirect to login page
        return;
    }

    // Fetch and parse phones data
    const phones = JSON.parse(localStorage.getItem('phones') || '[]');

    // Filter phones based on logged-in user's username
    const userPhones = phones.filter(phone => phone.seller === user.username);

    // Display phones
    const container = document.getElementById('phonesContainer'); // Ensure you have a div with this id in your HTML
    userPhones.forEach(phone => {
        const phoneElement = document.createElement('div');
        phoneElement.classList.add("eachPhone");
        phoneElement.innerHTML = `
        <div class="sellerItem">
        <h4>${phone.brand} ${phone.name}</h4>
        <img src="${phone.img}" alt="${phone.name}" class="phoneImg">
        <p>Year: ${phone.year}</p>
        <p>Storage: ${phone.storage}GB</p>
        <p>Quantity Left: ${phone.quantity}</p>
        <p class="price"><strong>${phone.price}</strong>QR</p>
        </div>
        `;
        container.appendChild(phoneElement);
    });

    if(userPhones.length === 0) {
        container.innerHTML = '<p>No phones found for this seller.</p>';
    }

    logged();
    showUserTab();

});
