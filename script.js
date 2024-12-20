


function loader() {
  var tl = gsap.timeline();
  tl.from("#loader h3", {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.5
  });
  tl.to("#loader h3", {
      opacity: 0,
      x: -100,
      stagger: 0.3,
      duration: 1,
  });

  tl.to("#loader", {
      opacity: 0,
      duration: 1,
      display: 'none',
  });

  tl.from("#page1 h1 span", {
      y: 100,
      duration: 0.4,
      stagger: 0.5,
      opacity: 0,
      scrub: 2
  })
}

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
    
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";

  });
  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
function menuToggle() {

  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
  
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  });
}





loader()
// page1()
menuToggle()
// page4Animation();