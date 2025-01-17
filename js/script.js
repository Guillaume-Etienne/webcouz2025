// Swiper   /Menu burger   / Menu qui disparaît au scroll

//  -------------- Swiper --------------
// Initialiser le slider SwiperJS
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1500
  });
});


// -------------  Menu Burger -----------
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const menuLinks = document.querySelectorAll('.menu a');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');  
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  menuToggle.classList.remove('menu-close');
});
// fermer le menu au clic en dehors
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('active');
  }
});
// Fermer le menu au clic sur un lien
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// ------------Menu scroll ------------
// Sélectionner le header
const header = document.querySelector('.header');
// Variables pour suivre le dernier scroll
let lastScrollY = window.scrollY;
let scrollDelta = 0;
// Seuil de scroll pour la disparition
const scrollThreshold = 150;

// Détecter la direction du scroll
window.addEventListener('scroll', () => {
  // Calculer la différence de scroll depuis le dernier changement de direction
  if (window.scrollY > lastScrollY) {    
    // Scroll vers le bas
    if (scrollDelta < 0) scrollDelta = 0; // Réinitialiser si changement de direction
    scrollDelta += window.scrollY - lastScrollY;
    
    if (scrollDelta > scrollThreshold) {
      header.classList.add('hidden');
    }
  } else {
    // Scroll vers le haut
    if (scrollDelta > 0) scrollDelta = 0; // Réinitialiser si changement de direction
    scrollDelta += window.scrollY - lastScrollY;
    header.classList.remove('hidden');
  }
  
  // Mettre à jour la position précédente du scroll
  lastScrollY = window.scrollY;
});