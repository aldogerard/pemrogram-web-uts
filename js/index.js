const chooseCardsWrapper = document.querySelector(".choose-cards-wrapper ");
const reviewCardsWrapper = document.querySelector(".review-cards-wrapper ");

const dataChoose = [
  {
    title: "WE DELIVER QUALITY",
    desc: "We are proud to uphold our commitment to provide the best quality in every construction project we handle.",
    image: "./assets/shield.png",
  },
  {
    title: "ALWAYS ON TIME ",
    desc: "We do careful planning, optimize work efficiency, and use a structured approach to ensure that our projects are completed on time.",
    image: "./assets/clock.png",
  },
  {
    title: "WE ARE PASSIONATE",
    desc: "We are driven by passion in everything we do. Our team is fueled by a deep passion for the construction industry and a genuine love for what we do.",
    image: "./assets/passionate.png",
  },
  {
    title: "PROFESSIONAL SERVICES",
    desc: "We are committed to providing professional services of the highest standards. Professionalism is ingrained in every aspect of our operations.",
    image: "./assets/professional.png",
  },
];

const dataReview = [
  {
    name: "John Smith",
    desc: "I am very impressed with the services, they carry out our projects with high professionalism and the results are truly outstanding. They listened well to our needs and provided the right solutions.",
    image: "./assets/man.jpg",
    quote: "./assets/quote.png",
  },
  {
    name: "Lebron James",
    desc: "Tirta company is our trusted partner in our renovation projects. They are very responsive and always provide clear updates on the progress of the project, The work they do is of very high quality",
    image: "./assets/man.jpg",
    quote: "./assets/quote.png",
  },
  {
    name: "Eleanor Quinn",
    desc: "I am very satisfied with the services provided by the Constructor Company. They have a highly skilled and experienced team. They were very friendly, listened to our needs and provided valuable suggestions.",
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
