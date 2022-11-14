document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.principal');
  ScrollReveal().reveal('.nuestros-productos', { delay: 500 });
  ScrollReveal().reveal('.nuestros-servicios', { delay: 500 });
  ScrollReveal().reveal('.nuestros-servicios-two', { delay: 500 });
