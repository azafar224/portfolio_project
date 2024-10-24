// Mobile menu functionality
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenuIcon = document.getElementById("close-menu");
  const menuLinks = document.querySelectorAll(".menu-link"); // Select all menu options

  // Function to toggle the mobile menu
  hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Function to close the mobile menu
  closeMenuIcon.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  // Function to handle menu link clicks
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor behavior

      // Close the mobile menu
      mobileMenu.classList.remove("active");

      // Scroll to the correct section based on the href attribute
      const targetSection = document.querySelector(link.getAttribute("href"));
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
