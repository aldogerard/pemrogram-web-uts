const nav = document.querySelector("nav");
const navbar = document.querySelector("nav .navbar-list");
const title = document.querySelector(".navbar-title h1");
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggleSpan = document.querySelectorAll(".menu-toggle span");

const cardsWrapper = document.querySelector(".cards-wrapper ");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    return nav.classList.add("scroll");
  }
  return nav.classList.remove("scroll");
});

const data = [
  {
    title: "WE DELIVER QUALITY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recu, eaque. Fugit dolorem soluta repudiandae eos. consectetur",
    image: "./assets/shield.png",
  },
  {
    title: "ALWAYS ON TIME ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recu, eaque. Fugit dolorem soluta repudiandae eos. consectetur",
    image: "./assets/clock.png",
  },
  {
    title: "WE ARE PASIONATE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recu, eaque. Fugit dolorem soluta repudiandae eos. consectetur",
    image: "./assets/passionate.png",
  },
  {
    title: "PROFESSIONAL SERVICES",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recu, eaque. Fugit dolorem soluta repudiandae eos. consectetur",
    image: "./assets/professional.png",
  },
];

const getDataCards = () => {
  let cards = [];
  data.map((res) => {
    cards += updateUI(res);
  });
  cardsWrapper.innerHTML = cards;
};

const updateUI = (data) => {
  return `<div class="card-container">
  <div class="card-img">
    <img src=${data.image} alt="image">
  </div>
  <h6>${data.title}</h6>
  <p>${data.desc}</p>
</div>`;
};

getDataCards();
