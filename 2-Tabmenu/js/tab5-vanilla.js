const tabs = document.querySelectorAll(".tab li");
const highlight = document.querySelector(".tab-header .tab-highlight");
const contents = document.querySelectorAll(".tab-contents > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabNum = [...tabs].indexOf(tab);
    const tabMove = 160 * tabNum; // CSS에서 움직이는 탭폭이 160px

    //(1)하이라이트 이동
    if (highlight) highlight.style.left = `${tabMove}px`;

    //(2)탭 active 토글
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    //(3)컨텐츠 active 토글 (data-alt의 id로 매칭)
    const targetId = tab.dataset.alt; 
    contents.forEach((c) => c.classList.remove("active"));
    const target = document.getElementById(targetId);
    if (target) target.classList.add("active");
  });
});