const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

function closeMenu() {
  if (!navMenu || !navToggle) return;
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "메뉴 열기");
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function createCarousel(trackSelector, buttonAttr, intervalMs = 6000) {
  const track = document.querySelector(trackSelector);
  if (!track) return;

  const slides = [...track.children];
  let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
  if (index < 0) index = 0;

  function show(nextIndex) {
    slides[index].classList.remove("is-active");
    index = (nextIndex + slides.length) % slides.length;
    slides[index].classList.add("is-active");
  }

  document.querySelectorAll(`[${buttonAttr}]`).forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.getAttribute(buttonAttr);
      show(direction === "next" ? index + 1 : index - 1);
    });
  });

  if (slides.length > 1 && intervalMs > 0) {
    setInterval(() => show(index + 1), intervalMs);
  }
}

createCarousel("#stats-track", "data-stats", 6000);
createCarousel("#testimonials-track", "data-testimonials", 8000);
