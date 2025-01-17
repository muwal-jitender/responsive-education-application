// change navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show/Hide faq answer

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // Change icon
    const icon = faq.querySelector(".faq__icon span");
    icon.textContent = icon.textContent === "add" ? "remove" : "add";
  });
});

// Show/Hide NAV Menu on smaller screen

const navMenu = document.querySelector(".nav__menu");
const openNavMenuBtn = document.querySelector("#open-menu-btn");
const closeNavMenuBtn = document.querySelector("#close-menu-btn");

openNavMenuBtn.addEventListener("click", () => {
  navMenu.style.display = "flex";
  closeNavMenuBtn.style.display = "inline-block";
  openNavMenuBtn.style.display = "none";
});

closeNavMenuBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
  closeNavMenuBtn.style.display = "none";
  openNavMenuBtn.style.display = "inline-block";
});
