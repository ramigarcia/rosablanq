const hamburger = document.querySelector(".hamburger");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.add("show-nav");
  closeMenu.classList.add("show-close-menu");
  overlay.classList.add("show-overlay");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("show-nav");
  closeMenu.classList.remove("show-close-menu");
  overlay.classList.remove("show-overlay");
});

window.addEventListener("click", (e) => {
  if (
    nav.classList.contains("show-nav") &&
    e.target != nav &&
    e.target != hamburger
  ) {
    nav.classList.remove("show-nav");
    closeMenu.classList.remove("show-close-menu");
    overlay.classList.remove("show-overlay");
  }
});
