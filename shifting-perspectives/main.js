document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');

  if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');
    });
  }

  // flan in top-left toggles the same menu (menu appears from right)
  const flan = document.querySelector('#flan-corner');
  if (flan && offScreenMenu) {
    flan.addEventListener('click', (e) => {
      offScreenMenu.classList.toggle('active');
      if (hamMenu) hamMenu.classList.toggle('active');
    });
  }
});