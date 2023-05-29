const servicesCardsWrapper = document.querySelector(".services-cards-wrapper ");

const dataServices = [
  {
    title: "CONSTRUCTION MANAGEMENT",
    desc: "Efficient planning, coordination, and execution of construction projects while ensuring resource optimization and timely completion. Effective communication, team collaboration, and budget control are crucial in construction management.",
    image: "./assets/3.jpg",
  },
  {
    title: "RENOVATION",
    desc: "Renovation revitalizes spaces, transforming them with creative upgrades. Attention to detail and quality materials ensure exceptional results. Collaboration, innovation, and client satisfaction drive successful renovation endeavors.",
    image: "./assets/4.jpg",
  },
  {
    title: "ARCHITECTURE",
    desc: "Architecture blends creativity and functionality, shaping spaces that inspire and improve our quality of life. Architects design structures that harmonize with their surroundings and create meaningful experiences.",
    image: "./assets/2.jpg",
  },
  {
    title: "MECHANICAL",
    desc: "Mechanical engineering encompasses the design, analysis, and maintenance of mechanical systems. It involves innovation, problem-solving, and applying scientific principles to create efficient and reliable machines and structures.",
    image: "./assets/2.jpg",
  },
  {
    title: "ENVIRONMENTAL",
    desc: "Environmental conservation promotes sustainability and protects ecosystems. Renewable energy, waste reduction, conservation practices, and awareness contribute to a greener future for generations to come.",
    image: "./assets/3.jpg",
  },
  {
    title: "ELECTRICAL",
    desc: "Environmental preservation is crucial for a sustainable future. Conservation, renewable energy, recycling, and responsible practices help protect ecosystems and mitigate climate change. Collective efforts ensure a greener planet.",
    image: "./assets/4.jpg",
  },
];

const getDataCardsServices = () => {
  let cards = [];
  let delay = 0;
  dataServices.map((res) => {
    cards += updateUISevices(res, delay);
    delay += 100;
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
