document.addEventListener("DOMContentLoaded", function() {
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
        phoneElement.innerHTML = `
        <h2 class="SellingTitle">Hi, ${phone.seller},</h2>
        <div class="sellerItem">
        <h3>${phone.brand} ${phone.name}</h3>
        <p>Year: ${phone.year}</p>
        <p>Price: $${phone.price}</p>
        <p>Storage: ${phone.storage}GB</p>
        <p>Quantity Left: ${phone.quantity}</p>
        <img src="${phone.img}" alt="${phone.name}" style="width: 100px; height: auto;">

        </div>
        `;
        container.appendChild(phoneElement);
    });

    if(userPhones.length === 0) {
        container.innerHTML = '<p>No phones found for this seller.</p>';
    }
});
