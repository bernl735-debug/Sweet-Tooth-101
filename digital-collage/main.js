document.addEventListener('DOMContentLoaded', function () {

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        });
    }


    const gallery = document.querySelector('.gallery');
    if (gallery) {
        const label = gallery.querySelector('.gallery-label');
        const imgs = gallery.querySelectorAll('img');

        function showLabel(text) {
            if (!label) return;
            label.textContent = text || '';
            label.classList.add('visible');
            label.setAttribute('aria-hidden', 'false');
        }
        function hideLabel() {
            if (!label) return;
            label.classList.remove('visible');
            label.setAttribute('aria-hidden', 'true');
        }

        imgs.forEach(img => {
            img.addEventListener('mouseenter', () => showLabel(img.alt));
            img.addEventListener('focus', () => showLabel(img.alt));
            img.addEventListener('mouseleave', hideLabel);
            img.addEventListener('blur', hideLabel);

            img.addEventListener('click', (e) => {
                e.preventDefault();
                if (label.classList.contains('visible')) hideLabel(); else showLabel(img.alt);
            });
        });

        document.addEventListener('click', (e) => {
            if (!gallery.contains(e.target)) hideLabel();
        });
    }
});