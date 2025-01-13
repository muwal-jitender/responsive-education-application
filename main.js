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
