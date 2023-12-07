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
const mediaQuery = window.matchMedia('(min-width: 768px)')
if(mediaQuery){
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
let id = "";

menuToggle.addEventListener('click', (event) => {
  navbar.classList.toggle('active');

});

function reply_click(clicked_id) {
  console.log(clicked_id);
  id = clicked_id;
  handleMenuAction(); // Call function to handle menu actions
  return clicked_id;
}

function handleMenuAction() {
  if (id === "1" || id === "2" || id === "3" || id === "4" || id === "5") {
    navbar.classList.remove("active");
  }
}
}
  
// });

