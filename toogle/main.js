let button = document.getElementById('switch-mode');
let page = document.body;

button.addEventListener('click', function() {
    page.classList.toggle('dark-mode');
});