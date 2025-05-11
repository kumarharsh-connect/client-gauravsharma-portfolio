gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",

  scrollTrigger: {
    // Affects The Navbar

    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

var sideMenu = document.getElementById("side-menu");
function openmenu() {
  sideMenu.style.right = "0";
}

function closemenu() {
  sideMenu.style.right = "-200px";
}

function disablegsap() {}

let mm = gsap.matchMedia();

mm.add("(max-width: 800px)", () => {
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      start: "top 1%",
      end: "top 10%",
      scrub: 1,
    },
  });

  gsap.from("#about-me img, #about-me-content", {
    disablegsap,
  });

  gsap.from("#cards-container", {
    disablegsap,
  });
});

// Affects the Main tag
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1,
  },
});

gsap.from("#about-me img, #about-me-content", {
  y: 50,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-me",
    scroller: "body",
    start: "top 65%",
    end: "top 50%",
    scrub: 3,
  },
});

gsap.from("#cards-container", {
  y: 50,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 100%",
    end: "top 90%",
    scrub: 2,
  },
});

gsap.from("#quote1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    start: "top 60%",
    end: "top 47%",
    scrub: 4,
  },
});

gsap.from("#quote2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#quote1",
    scroller: "body",
    start: "top 60%",
    end: "top 47%",
    scrub: 4,
  },
});

// IMAGE SLIDER
let scrollGallery = document.querySelector(".gallery");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");

scrollGallery.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollGallery.scrollLeft += evt.deltaY;
  scrollGallery.style.scrollBehavior = "auto";
});

rightBtn.addEventListener("click", () => {
  scrollGallery.style.scrollBehavior = "smooth";
  scrollGallery.scrollLeft += 1200;
});

leftBtn.addEventListener("click", () => {
  scrollGallery.style.scrollBehavior = "smooth";
  scrollGallery.scrollLeft -= 1200;
});
