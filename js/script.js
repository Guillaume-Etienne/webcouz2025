console.log("script.js Lancé Gui c'est bon !");

// script.js

const swiper = new Swiper('.swiper-container', {
    loop: true, // Slider infini
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000, // Transition automatique toutes les 3 secondes
      disableOnInteraction: false, // Continue même après une interaction
    },
    slidesPerView: 1, // Une slide visible à la fois
    spaceBetween: 10, // Espace entre les slides (en px)
  });

// Gestion du menu
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});


