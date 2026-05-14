document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".thumbs img");
  const largeImg = document.querySelector("#largeImg img");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
      largeImg.src = thumb.src;
    });
  });
});