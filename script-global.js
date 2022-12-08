// Fige le menu en haut de l'ecran---Nico
const menu = document.querySelector("#menu");
const logoMain = document.querySelector(".logo-main");
const logoFacebook = document.querySelector(".logo-facebook");
const logoInstagram = document.querySelector(".logo-instagram");
const logoWhatsApp = document.querySelector(".logo-whats-app");
const logoSandwitch = document.querySelector(".logo-sandwitch");

const flexContainerCenter = document.querySelector("#flex-container-center");
const windowHeigth = window.innerHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= menu.offsetTop + windowHeigth) {
    logoMain.style.filter = "invert(0)";
    logoFacebook.style.filter = "invert(0)";
    logoInstagram.style.filter = "invert(0)";
    logoWhatsApp.style.filter = "invert(0)";
    logoSandwitch.style.filter = "invert(0)";
  }
  if (window.scrollY < menu.offsetTop + windowHeigth) {
    logoMain.style.filter = "invert(1)";
    logoFacebook.style.filter = "invert(1)";
    logoInstagram.style.filter = "invert(1)";
    logoWhatsApp.style.filter = "invert(1)";
    logoSandwitch.style.filter = "invert(1)";
  }
});

window.scroll(function () {
  this.scrollLeft = 0;
});
