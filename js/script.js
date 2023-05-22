const nav = document.querySelector("nav");
const navbar = document.querySelector("nav .navbar-list");
const title = document.querySelector(".navbar-title h1");
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggleSpan = document.querySelectorAll(".menu-toggle span");

const chooseCardsWrapper = document.querySelector(".choose-cards-wrapper ");
const servicesCardsWrapper = document.querySelector(".services-cards-wrapper ");
const reviewCardsWrapper = document.querySelector(".review-cards-wrapper ");

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
const dataReview = [
  {
    name: "John Smith",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquam ipsum! Dicta ea impedit amet eius ullam libero unde non rem similique reprehenderit quo, aliquid voluptatibus fuga.",
    image: "./assets/man.jpg",
    quote: "./assets/quote.png",
  },
  {
    name: "Lebron James",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquam ipsum! Dicta ea impedit amet eius ullam libero unde non rem similique reprehenderit quo, aliquid voluptatibus fuga.",
    image: "./assets/man.jpg",
    quote: "./assets/quote.png",
  },
  {
    name: "Eleanor Quinn",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, aliquam ipsum! Dicta ea impedit amet eius ullam libero unde non rem similique reprehenderit quo, aliquid voluptatibus fuga.",
    image: "./assets/man.jpg",
    quote: "./assets/quote.png",
  },
];

const getDataCardsChoose = () => {
  let cards = [];
  let delay = 0;
  dataChoose.map((res) => {
    cards += updateUIChoose(res, delay);
    delay += 300;
  });
  chooseCardsWrapper.innerHTML = cards;
};

const getDataCardsServices = () => {
  let cards = [];
  let delay = 0;
  dataServices.map((res) => {
    cards += updateUISevices(res, delay);
    delay += 300;
  });
  servicesCardsWrapper.innerHTML = cards;
};

const getDataCardsReview = () => {
  let cards = [];
  let delay = 0;
  dataReview.map((res, i) => {
    cards += updateUIReview(res, i, delay);
    delay += 300;
  });
  reviewCardsWrapper.innerHTML = cards;
};

const updateUIChoose = (data, delay) => {
  return `<div class="card-container" data-aos="fade-up" data-aos-delay=${delay}>
  <div class="card-img">
    <img src=${data.image} alt="image">
  </div>
  <h6>${data.title}</h6>
  <p>${data.desc}</p>
</div>`;
};

const updateUISevices = (data, delay) => {
  return `<div class="card-container" data-aos="fade-left" data-aos-delay=${delay}>
  <div class="card-img">
    <img src=${data.image} alt="services">
  </div>
  <div class="card-container-desc">
    <h6>${data.title}</h6>
    <p>${data.desc}</p>
    <a href="#services" class="btn">
      Know More
    </a>
  </div>
</div>`;
};

const updateUIReview = (data, i, delay) => {
  return `<div class="review-cards-container" data-aos="zoom-in" data-aos-delay=${delay}>
  <div class="card-comment">
    <div class="card-quote">
    </div>
    <p>${data.desc}</p>
  </div>
  <div class="card-person person-${i + 1}"></div>
  <h4>${data.name}</h4>
</div>`;
};

getDataCardsChoose();
getDataCardsServices();
getDataCardsReview();
