const servicesCardsWrapper = document.querySelector(".services-cards-wrapper ");

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
  {
    title: "MECHANICAL",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aspernatur delectus. Eveniet, distinctio laboriosam eos dolor voluptatum architecto voluptas rerum cum vel expedita alias, ipsa sint ex!Consequatur, iure reprehenderit!",
    image: "./assets/2.jpg",
  },
  {
    title: "ENVIRONMENTAL",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aspernatur delectus. Eveniet, distinctio laboriosam eos dolor voluptatum architecto voluptas rerum cum vel expedita alias, ipsa sint ex!Consequatur, iure reprehenderit!",
    image: "./assets/3.jpg",
  },
  {
    title: "ELECTRICAL",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aspernatur delectus. Eveniet, distinctio laboriosam eos dolor voluptatum architecto voluptas rerum cum vel expedita alias, ipsa sint ex!Consequatur, iure reprehenderit!",
    image: "./assets/4.jpg",
  },
];

const getDataCardsServices = () => {
  let cards = [];
  let delay = 0;
  dataServices.map((res) => {
    cards += updateUISevices(res, delay);
    delay += 200;
  });
  servicesCardsWrapper.innerHTML = cards;
};

const updateUISevices = (data, delay) => {
  return `<div class="card-container" data-aos="fade-up" data-aos-delay=${delay}>
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

getDataCardsServices();
