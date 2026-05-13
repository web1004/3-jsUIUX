const items = [...document.querySelectorAll(".port-list ul li")];
const btn = document.querySelector(".load-more");
const step = 3;
let shown = 0;

const showNext = () => {
  items.slice(shown, shown + step).forEach((li) => (li.style.display = "block"));
  shown += step;
  if (shown >= items.length) btn.style.display = "none";
};

btn.addEventListener("click", showNext);
showNext(); // 처음 3개 표시