// This script handles the functionality for the mobile navigation menu.

// Get references to the mobile menu button and the mobile menu element
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add a click event listener to the mobile menu button
mobileMenuButton.addEventListener('click', () => {
    // Toggle the 'hidden' class on the mobile menu to show or hide it
    mobileMenu.classList.toggle('hidden');
});

