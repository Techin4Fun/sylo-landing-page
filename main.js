import { inView, animate } from "motion";

const heroImage = document.querySelector("#hero-img");



inView("section", ({ target }) => {
  animate(
    target.querySelector("#hero-img"),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

console.log("It works!");