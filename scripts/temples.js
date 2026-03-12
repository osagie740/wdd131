// THE SIMPLEST POSSIBLE VERSION

// ----- Footer dates -----
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// ----- Hamburger menu -----
const btn = document.getElementById('hamburger');
const menu = document.getElementById('navMenu');

// Hide menu and show hamburger on mobile
function mobileView() {
    if (window.innerWidth < 768) {
        menu.style.display = 'none';
        btn.style.display = 'block';
        btn.textContent = '☰';
    } else {
        menu.style.display = 'flex';
        btn.style.display = 'none';
    }
}

// Run on load and resize
mobileView();
window.addEventListener('resize', mobileView);

// Toggle menu when button clicked
btn.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        btn.textContent = '✕';
    } else {
        menu.style.display = 'none';
        btn.textContent = '☰';
    }
});