 // -------------------------------------  Toggle
  // Récupérez tous les boutons et le texte supplémentaire
  const toggleButtons = document.querySelectorAll('.toggle-button');
  const additionalTexts = document.querySelectorAll('.additional-text');
  
  // Ajoutez un gestionnaire d'événements de clic à chaque bouton
  toggleButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          // Affichez ou masquez le texte supplémentaire en fonction de son état actuel
          if (additionalTexts[index].style.display === 'none' || additionalTexts[index].style.display === '') {
              additionalTexts[index].style.display = 'block';
              button.textContent = ' < ';
          } else {
              additionalTexts[index].style.display = 'none';
              button.textContent = ' > ';
          }
      });
  });