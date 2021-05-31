const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

const nav = document.querySelector(".nav");

hamburger.addEventListener("click", showNav);
closeMenu.addEventListener("click", closeNav);

function showNav(e) {
  nav.classList.add("show-nav");
  closeMenu.classList.add("show-close-menu");
  overlay.classList.add("show-overlay");
}

function closeNav() {
  nav.classList.remove("show-nav");
  closeMenu.classList.remove("show-close-menu");
  overlay.classList.remove("show-overlay");
}
