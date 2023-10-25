// Seleciona o botão de menu e o menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');
// Adiciona um ouvinte de eventos para o clique no botão de menu
menuToggle.addEventListener('click', () => {
  // Alternar a visibilidade do menu
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});