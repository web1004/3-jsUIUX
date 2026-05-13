const tabs = document.querySelectorAll(".tab li");
const highlight = document.querySelector(".tab-header .tab-highlight");
const contents = document.querySelectorAll(".tab-contents > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabNum = [...tabs].indexOf(tab);
    const tabMove = 70 * tabNum; // CSS기준: 이동하는 탭높이 70px 

    /* (1)하이라이트 세로 이동 */
    if (highlight) highlight.style.top = `${tabMove}px`;

    /* (2)탭 active 토글 */
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    /* (3)콘텐츠 active 토글 */
    const targetId = tab.dataset.alt; 
    contents.forEach(c => c.classList.remove("active"));
    const target = document.getElementById(targetId);
    if (target) target.classList.add("active");
  });
});