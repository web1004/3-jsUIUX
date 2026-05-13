document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  const slides = () => content.querySelectorAll(":scope > div"); // 현재 순서의 슬라이드들
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  const currentEl = document.querySelector(".page-num span:first-child");
  const totalEl = document.querySelector(".page-num span:last-child");

  const total = slides().length;
  let current = 1;

  // 처음 페이지 번호 표시
  currentEl.textContent = current;
  totalEl.textContent = total;

  // 이전
  prevBtn.addEventListener("click", () => {
    current = current - 1 < 1 ? total : current - 1;
    content.prepend(slides()[total - 1]); // 마지막 div를 맨 앞으로
    currentEl.textContent = current;
  });

  // 다음
  nextBtn.addEventListener("click", () => {
    current = current + 1 > total ? 1 : current + 1;
    content.append(slides()[0]); // 첫 div를 맨 뒤로
    currentEl.textContent = current;
  });
});
