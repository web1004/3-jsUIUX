// quick1.js (Vanilla JS)
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar-content");
  const btn = document.querySelector(".btn-sidebar");
  const icon = btn.querySelector("span:nth-child(1)");
  const text = btn.querySelector("span:nth-child(2)");

  btn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("active");

    // 아이콘 클래스 교체
    /* 
    classList.toggle(클래스명, 조건)
    toggle은 원래 “있으면 빼고, 없으면 넣고”인데, 두 번째 인자(조건 boolean) 를 주면 의미가 바뀜
    조건이 true → 그 클래스를 반드시 추가(add) / 조건이 false → 그 클래스를 반드시 제거(remove)
    */
    icon.classList.toggle("xi-angle-right-thin", !isOpen); //isOpen : 사이드바가 닫혀있다(열림의 반대)
    icon.classList.toggle("xi-angle-left-thin", isOpen); //isOpen : 사이드바가 열려있다(active가 붙은 상태)

    // 텍스트 교체
    text.textContent = isOpen ? "close" : "open";
  });
});
