const chooseCardsWrapper = document.querySelector(".choose-cards-wrapper ");
const reviewCardsWrapper = document.querySelector(".review-cards-wrapper ");

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
    delay += 100;
  });
  chooseCardsWrapper.innerHTML = cards;
};

const getDataCardsReview = () => {
  let cards = [];
  let delay = 0;
  dataReview.map((res, i) => {
    cards += updateUIReview(res, i, delay);
    delay += 100;
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
getDataCardsReview();
