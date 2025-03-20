// Sticky Navbar
window.onscroll = function() {
    stickyNavbar();
    stickyBackToTop();
};

// Get the navbar
var navbar = document.getElementById("navbar");
// Get the back-to-top button
var backToTopButton = document.querySelector(".back-to-top");

// Set the scroll position threshold for both elements
var stickyThreshold = 400; // Scroll position at which navbar should become sticky

// Add sticky class to navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
    if (window.pageYOffset >= stickyThreshold) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Add sticky class to back-to-top button when you reach its scroll position. Remove "actid" when you leave the scroll position
function stickyBackToTop() {
    if (window.pageYOffset >= stickyThreshold) {
        backToTopButton.classList.add("actid");
    } else {
        backToTopButton.classList.remove("actid");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button and collapse element
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.getElementById('navbar-collapse');

    // Toggle the collapse on button click
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('collapse');
    });
});
