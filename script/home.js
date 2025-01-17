const toggleButton = document.getElementById('toggle-nav');
const navMenu = document.getElementById('nav-menu');


toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show'); 
});