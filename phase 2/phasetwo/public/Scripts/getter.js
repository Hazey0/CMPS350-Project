// Function to initialize data by fetching from the API
export async function starter() {
    // Fetch phones data from the API
    fetch('/api/phones')
        .then(response => response.json())
        .then(phones => {
            console.log('Phones loaded:', phones);
            //optionally cache phones in local storage
            //localStorage.setItem('phones', JSON.stringify(phones));
        })
        .catch(error => console.error('Failed to load phones:', error));

    // Fetch user data from the API
    fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            console.log('Users loaded:', users);
            // optionally cache users in local storage
            //localStorage.setItem('users', JSON.stringify(users));
        })
        .catch(error => console.error('Failed to load users:', error));
}

document.addEventListener('DOMContentLoaded', starter);
