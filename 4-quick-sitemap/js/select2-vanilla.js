document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".select");

  selects.forEach((selectEl) => {
    selectEl.addEventListener("click", () => {
      // HTML에서 .select 바로 다음 형제가 .menu 입니다.
      const menuEl = selectEl.nextElementSibling;
      if (!menuEl || !menuEl.classList.contains("menu")) return; // 안전장치

      // 열림/닫힘 토글 (CSS 전환은 .menu.open 으로 처리)
      const isOpen = menuEl.classList.toggle("open");
      selectEl.classList.toggle("active", isOpen);

      // 화살표 아이콘(up/down) 토글
      const icon = selectEl.querySelector("span i");
      if (icon) {
        icon.classList.toggle("fa-chevron-up", !isOpen);
        icon.classList.toggle("fa-chevron-down", isOpen);
      }
    });
  });
});
