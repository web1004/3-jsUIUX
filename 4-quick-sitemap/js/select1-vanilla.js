document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const menu = document.querySelector(".sub-navi");

  title.addEventListener("click", () => {
    title.classList.toggle("active");
    menu.classList.toggle("open");
  });
});
