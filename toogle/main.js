let button = document.getElementById('switch-mode');
let page = document.body;

button.addEventListener('click', function() {
    page.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  if (!hamMenu || !offScreenMenu) return;
  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  });
});