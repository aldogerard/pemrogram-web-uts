const nav = document.querySelector("nav");
const navbar = document.querySelector("nav .navbar-list");
const title = document.querySelector(".navbar-title h1");
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggleSpan = document.querySelectorAll(".menu-toggle span");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    return nav.classList.add("scroll");
  }
  return nav.classList.remove("scroll");
});
