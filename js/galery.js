const thumbnail = document.querySelector(".galery-container-img1");
const video = document.querySelector(".video");
const videoPlayer = document.querySelector(".video video");
const close = document.querySelector(".video .close");

close.addEventListener("click", () => {
  videoPlayer.pause();
  video.classList.remove("show");
});

thumbnail.addEventListener("click", () => {
  video.classList.add("show");
  videoPlayer.play();
});

const galery = document.querySelectorAll(".galery-container-img div");

const slideContainer = document.querySelector(".slides-container");
const slideImage = document.querySelectorAll(".slides-container img");
const slideBefore = document.querySelector(".before");
const slideNext = document.querySelector(".next");
const slideClose = document.querySelector(".slides-container .close");

let currentIndex = 0;

galery.forEach((res, i) => {
  if (i > 0) {
    res.addEventListener("click", () => {
      slideContainer.classList.add("showSlide");
      currentIndex = i - 1;
      showImage(currentIndex);
    });
  }
});

slideClose.addEventListener("click", () => {
  slideContainer.classList.remove("showSlide");
});

slideBefore.addEventListener("click", () => {
  showImage((currentIndex -= 1));
});

slideNext.addEventListener("click", () => {
  showImage((currentIndex += 1));
});

const showImage = (index) => {
  if (index > slideImage.length - 1) {
    currentIndex = 0;
  }
  if (index < 0) {
    currentIndex = slideImage.length - 1;
  }

  slideImage.forEach((res) => {
    res.style.display = "none";
  });

  slideImage[currentIndex].style.display = "block";
};
