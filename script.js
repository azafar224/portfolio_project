// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuIcon = document.getElementById("close-menu");

  // Function to toggle the mobile menu
  hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Function to close the mobile menu
  closeMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});
