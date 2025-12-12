document.addEventListener('DOMContentLoaded', function () {

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    if (hamMenu && offScreenMenu) {
        hamMenu.addEventListener('click', () => {
            hamMenu.classList.toggle('active');
            offScreenMenu.classList.toggle('active');
        });
    }
});

let backgroundInput = document.getElementById("bg-color");
let fontColorInput = document.getElementById("fg-color");
let fontInput = document.getElementById("font");
let fontSizeInput = document.getElementById("font-size");
let fontStretchInput = document.getElementById("font-stretch");
let imageInput = document.getElementById("image");
let textInput = document.getElementById("text");
let button = document.getElementById("print");
const defaultFloatingImage = "./assets/flan.png";


let poster = document.getElementById("poster");
let posterText = document.getElementById("poster-text");
let posterImage = document.getElementById("poster-image");

    
backgroundInput.addEventListener("change", function () {
    let bgcolor = this.value;
    poster.style.backgroundColor = bgcolor;
    document.body.style.backgroundColor = bgcolor;


    const hamMenuSpans = document.querySelectorAll('.ham-menu span:not(:nth-child(2))');
    hamMenuSpans.forEach(span => {
        span.style.backgroundColor = bgcolor;
    });
})

fontColorInput.addEventListener("change", function () {
    let fgcolor = this.value;
    poster.style.color = fgcolor;
})

fontInput.addEventListener("change", function () {
    let font = this.value;
    posterText.style.fontFamily = font;
})


fontSizeInput.addEventListener("change", function () {
    let size = this.value;
    posterText.style.fontSize = size + "px";
})


fontStretchInput.addEventListener("change", function () {
    let stretchFactor = this.value;
    console.log(stretchFactor)
    posterText.style.transform = "scaleX(" + stretchFactor + ")";
})



function updateFloatingImages(imgPath) {
    const source = imgPath || defaultFloatingImage;
    document.querySelectorAll('.floating-flan').forEach((el) => {
        el.style.backgroundImage = "url('" + source + "')";
    });
}


imageInput.addEventListener("change", function () {
    let img = this.value;
    posterImage.src = img;
    updateFloatingImages(img);
})

textInput.addEventListener("change", function () {
    let text = this.value;
    posterText.innerHTML = text;
})


button.addEventListener("click", function () {
    window.print();
})


updateFloatingImages(imageInput.value);