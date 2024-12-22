console.log("script.js Lancé Gui c'est bon !");

// script.js

// script.js

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

  // Gérer l'ouverture et la fermeture du menu
  const menu = document.querySelector('.menu');
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');

  menuToggle.addEventListener('click', () => {
    menu.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
