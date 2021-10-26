// const toggleBtn = document.querySelector(".mobile-nav-toggle");
// const navbar = document.querySelector(".primary-navigation");

// toggleBtn.addEventListener("click", () => {
//   navbar.classList.toggle("open");
//   toggleBtn.classList.toggle("open");
// });

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Open and Close the toggle button - change the toggle button image
navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
