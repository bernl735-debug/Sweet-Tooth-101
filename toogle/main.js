button.addEventListener('click', function() {
    let thisDiv = document.querySelector('.this');
    let thatDiv = document.querySelector('.that');

    thisDiv.classList.toggle('active');
    thatDiv.classList.toggle('active');
});