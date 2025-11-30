
// Getting the form inputs by their ids and storing them in variables
let backgroundInput = document.getElementById("bg-color");
let fontColorInput = document.getElementById("fg-color");
let fontInput = document.getElementById("font");
let fontSizeInput = document.getElementById("font-size");
let fontStretchInput = document.getElementById("font-stretch");
let imageInput = document.getElementById("image");
let textInput = document.getElementById("text");
let button = document.getElementById("print");

// Getting the poster, the poster text and poster image by their ids and storing them in variables
let poster = document.getElementById("poster");
let posterText = document.getElementById("poster-text");
let posterImage = document.getElementById("poster-image");

// when the bg input is changed, update the poster background
backgroundInput.addEventListener("change", function(){
    let bgcolor = this.value; //grab the current input value
    poster.style.backgroundColor = bgcolor; //use .style to add it as a bg color
})
// when the font color input is changed, update the poster font color
fontColorInput.addEventListener("change", function(){
    let fgcolor = this.value; //grab the current input value
    poster.style.color = fgcolor; //use .style to add it as a font color
})
// when the font input is changed, update the poster text font
fontInput.addEventListener("change", function(){
    let font = this.value; //grab the current input value
    posterText.style.fontFamily = font; //use .style to add it as a font family 
})

// when the font size input is changed, update the poster text font
fontSizeInput.addEventListener("change", function(){
    let size = this.value; //grab the current input value
    posterText.style.fontSize = size + "px"; //use .style to add it as a font size. We need to also add "px" for pixels at the end for it to work as CSS. 
})

// when the font stretch input is changed, update the poster text font
fontStretchInput.addEventListener("change", function(){
    let stretchFactor = this.value; //grab the current input value
    console.log(stretchFactor)
    posterText.style.transform = "scaleX(" + stretchFactor + ")"; //use .style to add it as a scale size
})


// when the image input changes, update the poster image 
imageInput.addEventListener("change", function(){
    let img = this.value; //grab the current input value
    posterImage.src = img; //use .src to change the image source
})
// when the text input changes, update the poster text 
textInput.addEventListener("change", function(){
    let text = this.value; //grab the current input value
    posterText.innerHTML = text; //use .innerHTML to change the element text
})

// when the button is clicked, print the page
button.addEventListener("click", function(){
    window.print(); //use .print to print the window
})