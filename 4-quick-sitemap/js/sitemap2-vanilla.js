document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector(".trigger");
  const sitemap = document.querySelector(".sitemap");
  if (!trigger || !sitemap) return;

  trigger.addEventListener("click", () => {
    const open = trigger.classList.toggle("active");
    sitemap.classList.toggle("open", open);
  });
});