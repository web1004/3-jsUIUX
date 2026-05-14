const trigger = document.querySelector('.trigger');
const modal = document.querySelector('.modal');

const toggle = () => {
  trigger.classList.toggle("active");
  modal.classList.toggle("is-open");
  document.documentElement.classList.toggle("no-scroll");
};

trigger.addEventListener("click", toggle);

// 배경(오버레이) 클릭하면 닫기: (안쪽 .sitemap 클릭은 유지)
modal.addEventListener("click", (e) => {
  trigger.classList.remove("active");
  modal.classList.remove("is-open");
  document.documentElement.classList.remove("no-scroll");
});

