// ========== MENU BURGER ==========
const burger = document.querySelector(".burger");
const navUl = document.querySelector("nav ul");

// Vérifier que les éléments existent
if (burger && navUl) {
  burger.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });

  // Fermer le menu si on clique en dehors du menu
  document.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target instanceof Node &&
      !burger.contains(target) &&
      !navUl.contains(target)
    ) {
      navUl.classList.remove("active");
    }
  });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const href = anchor.getAttribute("href");
    if (!href) return;

    const target = document.querySelector(href);
    if (!target) return;

    // Fermer le menu burger si ouvert
    const navUl = document.querySelector("nav ul");
    if (navUl && navUl.classList.contains("active")) {
      navUl.classList.remove("active");
    }

    // Scroll vers la section
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// ========== FAQ TOGGLE ==========
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    // Vérifie que c'est bien un HTMLElement et que c'est la bonne classe
    if (
      answer instanceof HTMLElement &&
      answer.classList.contains("faq-answer")
    ) {
      answer.style.display =
        answer.style.display === "block" ? "none" : "block";
    }
  });
});
