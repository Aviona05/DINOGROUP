// Select the navigation bar
const navbar = document.querySelector('.nav-bar');

// Select elements for logo interaction
const logo = document.querySelector('.logo-container img');
const brandName = document.querySelector('.brand-name');

// Variable to store the previous scroll position
let lastScrollY = window.scrollY;

// Navbar hide on scroll
window.addEventListener('scroll', () => {
  // Check the scroll direction
  if (window.scrollY > lastScrollY) {
    // Scrolling down - hide the navbar
    navbar.style.top = '-100px'; // Adjust based on your navbar height
    navbar.style.transition = 'top 0.3s ease-in-out';
  } else {
    // Scrolling up - show the navbar
    navbar.style.top = '0';
  }
  // Update the last scroll position
  lastScrollY = window.scrollY;
});

// Logo hover effects
logo.addEventListener('mouseover', () => {
  // Add pink glow effect to the logo
  logo.style.boxShadow = '0 0 30px 15px rgba(255, 105, 180, 0.8)'; // Pink glow
  logo.style.transition = 'all 0.3s ease-in-out';
  logo.style.transform = 'translateY(-5px)'; // Slight float upward

  // Make the brand name appear
  brandName.style.opacity = '1'; // Fully visible
  brandName.style.transition = 'all 0.3s ease-in-out';
});

logo.addEventListener('mouseout', () => {
  // Remove pink glow effect from the logo
  logo.style.boxShadow = 'none';
  logo.style.transform = 'translateY(0)'; // Reset float

  // Hide the brand name
  brandName.style.opacity = '0'; // Invisible
});
