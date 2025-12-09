document.addEventListener('DOMContentLoaded', function () {
  const hamMenu = document.querySelector('.ham-menu');
  const offScreenMenu = document.querySelector('.off-screen-menu');
  if (!hamMenu || !offScreenMenu) return;
  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  });
  // toggle chocolate overlay on mug click
  const mug = document.querySelector('.tazaa');
  const chocolate = document.querySelector('.chocolate');
  if (mug && chocolate) {
    mug.addEventListener('click', () => {
      chocolate.classList.toggle('visible');
    });
  }
});