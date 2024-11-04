// Sélectionnez l'élément avec l'ID "menu-icon" et stockez-le dans la variable "menu"
let menu = document.querySelector('#menu-icon');

// Sélectionnez l'élément avec la classe "navlist" et stockez-le dans la variable "navlist"
let navlist = document.querySelector('.navlist');

// Ajoutez un écouteur d'événement "click" sur le menu
menu.onclick = () => {
  // Ajoutez ou supprimez la classe "bx-x" au menu
  menu.classList.toggle('bx-x');
  // Ajoutez ou supprimez la classe "open" à la liste de navigation
  navlist.classList.toggle('open');
};

// Initialisez ScrollReveal avec certaines options
const sr = ScrollReveal({
  distance: '50px', // Distance de révélation en pixels
  duration: 2600, // Durée de l'animation en millisecondes
  reset: true // Réinitialiser l'animation lors du défilement inverse
});

// Révélez le titre avec un délai de 100ms et une origine du haut
sr.reveal('.title', { delay: 100, origin: 'top' });

sr.reveal('.logo', { delay: 100, origin: 'top' });

sr.reveal('.navlist', { delay: 200, origin: 'top' });

sr.reveal('.nav-right', { delay: 300, origin: 'top' });

sr.reveal('.main-content h1', { delay: 400, origin: 'left'});

sr.reveal('.main-content p', { delay: 600, origin: 'bottom'});

sr.reveal('.button', { delay: 700, origin: 'right'});

sr.reveal('.social-icons', { delay: 800, origin: 'left' })

sr.reveal('.services', { delay: 700, origin: 'top' })

sr.reveal('.testimonials', { delay: 500, origin: 'bottom' })

sr.reveal('.about', { delay: 300, origin: 'left' })

sr.reveal('.team', { delay: 300, origin: 'right' })

sr.reveal('.contact', { delay: 300, origin: 'bottom' })