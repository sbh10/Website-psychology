const burger = document.querySelector(".burger");
const navUl = document.querySelector("nav ul");

burger.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Ajouter un effet de défilement fluide pour la navigation

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // Fermer le menu après clic
    if (navUl.classList.contains("active")) {
      navUl.classList.remove("active");
    }
  });
});
