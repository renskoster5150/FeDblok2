// JavaScript Document
console.log("hi");
// Nav bar
var deButton = document.querySelector(".navbar button");

deButton.onclick = toggleMenu;

function toggleMenu() {  
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}


// Carrousel

const carrousel = document.querySelector("#carrousel div");
const prevButton = document.querySelector("a[href='previous']");
const nextButton = document.querySelector("a[href='next']");
const scrollAmount = 200;

prevButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    carrousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth", 
     });
});

    
nextButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    carrousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth", 
    });
});



// video
const video = document.querySelector('.Redbullvideo video');
const playButton = document.querySelector('.custom-video__control');


playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
});

