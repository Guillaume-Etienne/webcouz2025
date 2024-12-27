// Swiper   /Menu burger   / Menu qui disparaît au scroll


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
  });

  // Menu Burger
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');

  menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
    //menuToggle.classList.add('menu-close');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    menuToggle.classList.remove('menu-close');
  });
});

// ------------Menu scroll ------------
// Sélectionner le header
const header = document.querySelector('.header');

// Variables pour suivre le dernier scroll
let lastScrollY = window.scrollY;

// Détecter la direction du scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {    
    header.classList.add('hidden');
  } else {
    header.classList.remove('hidden');
  }
  // Mettre à jour la position précédente du scroll
  lastScrollY = window.scrollY;
});