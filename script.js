// ---------- OFFER BAR CLOSE ----------
const offerClose = document.getElementById("offer-close");
const offerBar = document.querySelector(".offer-bar");

if (offerClose && offerBar) {
  offerClose.addEventListener("click", () => {
    offerBar.style.display = "none";
  });
}
//-----slide---------
const sliderContainer = document.querySelector(".slider-image-container");
const slides = document.querySelectorAll(".slider-image");

let index = 0;

function showSlide() {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    sliderContainer.style.transform = `translateX(-${index * 100}vw)`;
}

document.getElementById("slider-right-activate").addEventListener("click", () => {
    index++;
    showSlide();
});

document.getElementById("slider-left-activate").addEventListener("click", () => {
    index--;
    showSlide();
});


// ---------- SIDE NAVBAR TOGGLE ----------
const sideNavbar = document.querySelector(".side-navbar");
const sideNavbarActivate = document.getElementById("side-navbar-activate");
const sideNavbarClose = document.getElementById("side-navbar-close");

if (sideNavbarActivate && sideNavbar) {
  sideNavbarActivate.addEventListener("click", () => {
    sideNavbar.style.left = "0";
  });
}

if (sideNavbarClose && sideNavbar) {
  sideNavbarClose.addEventListener("click", () => {
    sideNavbar.style.left = "-100%";
  });
}

// ---------- IMAGE SLIDER ----------
const sliderImages = document.querySelectorAll(".slider-image");
const leftButton = document.getElementById("slider-left-activate");
const rightButton = document.getElementById("slider-right-activate");

let currentIndex = 0;

function showSlide(index) {
  sliderImages.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

if (sliderImages.length > 0) {
  showSlide(currentIndex);

  rightButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    showSlide(currentIndex);
  });

  leftButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    showSlide(currentIndex);
  });
}

// ---------- SCROLL ANIMATION ----------
const scrollElements = document.querySelectorAll(".initial-scroll-animate");

function checkScroll() {
  scrollElements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll(); // Run once on load

//heart like button----------

const heartIcons = document.querySelectorAll(".like-button");

heartIcons.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.src.includes("heart.png")) {
      heart.src = "images/heart-red.png";  // red heart image
    } else {
      heart.src = "images/heart.png";      // normal heart image
    }
  });
});


// ---------- NEWSLETTER PLACEHOLDER ----------
const newsletterInput = document.querySelector(".search");
if (newsletterInput) {
  newsletterInput.placeholder = "Enter your email address";
}

