const nav = document.querySelector("nav");
const navbar = document.querySelector("nav .navbar-list");
const title = document.querySelector(".navbar-title h1");
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggleSpan = document.querySelectorAll(".menu-toggle span");

const chooseCardsWrapper = document.querySelector(".choose-cards-wrapper ");
const servicesCardsWrapper = document.querySelector(".services-cards-wrapper ");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("slide");
});

window.addEventListener("scroll", () => {
  if (scrollY > 10) {
    return nav.classList.add("scroll");
  }
  return nav.classList.remove("scroll");
});

const dataChoose = [
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

const dataServices = [
  {
    title: "CONSTRUCTION MANAGEMENT",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aspernatur delectus. Eveniet, distinctio laboriosam eos dolor voluptatum architecto voluptas rerum cum vel expedita alias, ipsa sint ex!Consequatur, iure reprehenderit!",
    image: "./assets/3.jpg",
  },
  {
    title: "RENOVATION",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aspernatur delectus. Eveniet, distinctio laboriosam eos dolor voluptatum architecto voluptas rerum cum vel expedita alias, ipsa sint ex!Consequatur, iure reprehenderit!",
    image: "./assets/4.jpg",
  },
  {
    title: "ARCHITECTURE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aspernatur delectus. Eveniet, distinctio laboriosam eos dolor voluptatum architecto voluptas rerum cum vel expedita alias, ipsa sint ex!Consequatur, iure reprehenderit!",
    image: "./assets/2.jpg",
  },
];

const getDataCardsChoose = () => {
  let cards = [];
  dataChoose.map((res) => {
    cards += updateUIChoose(res);
  });
  chooseCardsWrapper.innerHTML = cards;
};

const getDataCardsServices = () => {
  let cards = [];
  dataServices.map((res) => {
    cards += updateUISevices(res);
  });
  servicesCardsWrapper.innerHTML = cards;
};

const updateUIChoose = (data) => {
  return `<div class="card-container">
  <div class="card-img">
    <img src=${data.image} alt="image">
  </div>
  <h6>${data.title}</h6>
  <p>${data.desc}</p>
</div>`;
};

const updateUISevices = (data) => {
  return `<div class="card-container">
  <div class="card-img">
    <img src=${data.image} alt="services">
  </div>
  <div class="card-container-desc">
    <h6>${data.title}</h6>
    <p>${data.desc}</p>
    <a href="#" class="btn">
      Know More
    </a>
  </div>
</div>`;
};

getDataCardsChoose();
getDataCardsServices();
