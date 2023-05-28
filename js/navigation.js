const nav = document.querySelector("nav");
const navbar = document.querySelector("nav .navbar-list");
const title = document.querySelector(".navbar-title h1");
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggleSpan = document.querySelectorAll(".menu-toggle span");

const scrollToTop = document.querySelector("div.scroll-container");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    return nav.classList.add("scroll"), scrollToTop.classList.add("show-scroll-top");
  }
  return nav.classList.remove("scroll"), scrollToTop.classList.remove("show-scroll-top");
});

scrollToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
