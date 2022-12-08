let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// on initialise l'affichage sur la diapo 1
showSlides(slideIndex);

// on incrémente le slideIndex pour que la boucle sans fin démarre à la slide 2
slideIndex++;
console.log(slideIndex.length);
setInterval(function () {
  showSlides(slideIndex);
  // showSlides((slideIndex += i + 1));
  slideIndex++;
}, 5000);

// Fige le menu en haut de l'ecran---Nico
// const menuBis = document.querySelector("#menu");
// const windowHeigthBis = window.innerHeight;

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= menuBis.offsetTop + 30) {

//   }
//   if (window.scrollY < menuBis.offsetTop + windowHeigthBis - 30) {
//   }
// });
