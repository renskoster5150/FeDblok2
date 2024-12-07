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

// slideshow
  

// video
const video = document.querySelector('.Redbullvideo video');
const playButton = document.querySelector('videocontrol');


playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
});
video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

// Open modal
// const modal = document.querySelector(".dialog");
// const closeModal = document.querySelector(".closemodal");
// const openModal = document.querySelector(".favbutton");

// openModal.addEventListener("click", () => {
//     modal.showModal();
// });

// closeModal.addEventListener("click", () => {
//     modal.close();
//   });
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});