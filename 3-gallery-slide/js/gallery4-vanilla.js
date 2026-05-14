const slides = document.querySelectorAll(".largeImg li");
const texts = document.querySelectorAll(".imgText li");
const thumbs = document.querySelectorAll(".thumbs li");
const prev = document.querySelector("#gallery .left_btn");
const next = document.querySelector("#gallery .right_btn");

const last = slides.length - 1;
let current = 0;

const setActive = (index) => {
  slides.forEach((el, i) => el.classList.toggle("is-active", i === index));
  texts.forEach((el, i) => el.classList.toggle("is-active", i === index));
  thumbs.forEach((el, i) => el.classList.toggle("active", i === index));
  current = index;
};

const move = (dir) => {
  let nextIndex = current + dir;
  if (nextIndex < 0) nextIndex = slides.length - 1;
  if (nextIndex > slides.length - 1) nextIndex = 0;
  setActive(nextIndex);
};

thumbs.forEach((li, i) => li.addEventListener("click", () => setActive(i)));

prev.addEventListener("click", (e) => { e.preventDefault(); move(-1); });
next.addEventListener("click", (e) => { e.preventDefault(); move(1); });

setActive(0);
