const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const menu = document.querySelector<HTMLElement>("[data-menu]");

const closeMenu = () => {
  if (!menuToggle || !menu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menu.dataset.open = "false";
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  if (!menu) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menu.dataset.open = String(!isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    menuToggle?.focus();
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!reducedMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-visible", "true");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.setAttribute("data-visible", "true");
  });
}
