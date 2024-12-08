// JavaScript Document

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

const carrousel = document.querySelector("#carrousel .products");
const prevButton = document.querySelector("a[href='previous']");
const nextButton = document.querySelector("a[href='next']");
const scrollAmount = 200;

if (carrousel) {
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
} else {
}

// // slideshow
var buttonEen = document.querySelector('.button1');
var buttonTwee = document.querySelector('.button2');
var buttonDrie = document.querySelector('.button3');
var slideShow = document.querySelector("#slideshow1");
var articles = document.querySelectorAll("#slideshow1 article");

if(slideShow) {
  buttonEen.addEventListener("click", () => scrollToArticle(0));
  buttonTwee.addEventListener("click", () => scrollToArticle(1));
  buttonDrie.addEventListener("click", () => scrollToArticle(2));

  function scrollToArticle(index) {
    const article = articles[index];
    article.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  }  
} else {

}

// video
const video = document.querySelector(".Redbullvideo video");
const playButton = document.querySelector(".custom-video__control");

if (video) {
  playButton.addEventListener("click", () => {
    video.play();
    playButton.style.display = "none";
  });

  video.addEventListener("pause", () => {
    playButton.style.display = "block";
  });
} else {

}

// scroll ani
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// modal
const modal = document.querySelector(".dialog");
const openModal = document.querySelector(".favbutton");
const closeModal = document.querySelector(".close-button");

if (modal) {
  openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });
} else {
}
