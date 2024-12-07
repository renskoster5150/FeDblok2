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

// const carrousel = document.querySelector("#carrousel div");
// const prevButton = document.querySelector("a[href='previous']");
// const nextButton = document.querySelector("a[href='next']");
// const scrollAmount = 200;

// prevButton.addEventListener("click", (event) => {
//     event.preventDefault(); 
//     carrousel.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth", 
//      });
// });
    
// nextButton.addEventListener("click", (event) => {
//     event.preventDefault(); 
//     carrousel.scrollBy({
//         left: scrollAmount,
//         behavior: "smooth", 
//     });
// });

// // slideshow
  

// video
// const video = document.querySelector('.Redbullvideo video');
// const playButton = document.querySelector('.custom-video__control');

// playButton.addEventListener('click', () => {
//     video.play();
//     playButton.style.display = 'none';
// });

// video.addEventListener('pause', () => {
//     playButton.style.display = 'block';
// });

// scroll ani
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));



// modal
const modal = document.querySelector(".dialog");
const openModal = document.querySelector(".favbutton");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
