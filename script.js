document.addEventListener("DOMContentLoaded", function () {
    // Function to smoothly scroll to a section
    function scrollToSection(id) {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          behavior: "smooth",
          top: section.offsetTop,
        });
      }
    }

    // Add click event listeners to the navigation links
    document.querySelectorAll("nav a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        scrollToSection(targetId);
      });
    });
  });


// mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
