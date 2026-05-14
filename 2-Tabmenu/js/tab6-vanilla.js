document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab li");
  const highlight = document.querySelector(".tab-header .tab-highlight");
  const contents = document.querySelectorAll(".tab-contents > div");

  // jQuery animate 대체
  // if (highlight) highlight.style.transition = "top 0.35s ease";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabNum = [...tabs].indexOf(tab);
      const tabMove = 70 * tabNum; // CSS 기준: 탭 높이 70px :contentReference[oaicite:1]{index=1}

      /* 1. 하이라이트 세로 이동 */
      if (highlight) highlight.style.top = `${tabMove}px`;

      /* 2. 탭 active 토글 */
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      /* 3. 콘텐츠 active 토글 */
      const targetId = tab.dataset.alt; // data-alt="tab1" :contentReference[oaicite:2]{index=2}
      contents.forEach(c => c.classList.remove("active"));
      const target = document.getElementById(targetId);
      if (target) target.classList.add("active");
    });
  });
});
