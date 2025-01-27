// Add header layout
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    // Change navbar styles on scroll
    window.addEventListener("scroll", () => {
      document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0);
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
  });

// Add footer layout
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

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
