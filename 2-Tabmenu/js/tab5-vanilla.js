document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab li");
  const highlight = document.querySelector(".tab-header .tab-highlight");
  const contents = document.querySelectorAll(".tab-contents > div");

  // jQuery animate 대체: CSS transition을 JS에서 한 줄로 부여
  if (highlight) highlight.style.transition = "left 0.35s ease";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabNum = [...tabs].indexOf(tab);
      const tabMove = 160 * tabNum; // CSS에서 탭 폭이 160px 기준 :contentReference[oaicite:4]{index=4}

      // 1) 하이라이트 이동
      if (highlight) highlight.style.left = `${tabMove}px`;

      // 2) 탭 active 토글
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      // 3) 컨텐츠 active 토글 (data-alt의 id로 매칭)
      const targetId = tab.dataset.alt; // ex) "tab1" :contentReference[oaicite:5]{index=5}
      contents.forEach((c) => c.classList.remove("active"));
      const target = document.getElementById(targetId);
      if (target) target.classList.add("active");
    });
  });
});
