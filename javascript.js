// JavaScript for toggling the mobile menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
});

// JavaScript for the newsletter form
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});
