document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");

  const closeAll = () => modals.forEach(m => m.classList.remove("is-open")); //모달 목록을 한 번씩 돌면서 닫기 처리

  document.addEventListener("click", (e) => {
    // 1) 메뉴 클릭: 다음 형제(.modal) 열기 (한 번에 하나만)
    const menu = e.target.closest(".menu");  //클릭한 곳(e.target)에서 부모로 올라가며 .menu를 찾음
    if (menu) {
      e.preventDefault();
      closeAll();
      const modal = menu.nextElementSibling; // HTML에서 .menu 다음 형제 요소를 가져옴
      if (modal && modal.classList.contains("modal")) modal.classList.add("is-open"); //조건이 통과하면 .is-open 클래스를 추가해서 모달이 “열린 상태”가 됨
      /* 
      만약 구조가 바뀌거나(중간에 다른 요소가 끼거나) nextElementSibling이 없다면 modal은 null이 될 수 있고,
      null이면 false 취급이라서 뒤에 있는 modal.classList.contains(...) 를 아예 실행하지 않고 멈춤
      modal이 null인 상태에서 실행하면 에러가 나는데, 그걸 방지하는 안전장치임
      classList.contains("modal") : 다음 형제가 진짜 모달(.modal)일 때만 열기

      */
      return;
    }

    // 2) 닫기 버튼 클릭: 해당 모달만 닫기
    const closeBtn = e.target.closest(".close");
    if (closeBtn) {
      closeBtn.closest(".modal")?.classList.remove("is-open");
      return;
    }

    // 3) 검정 배경(.modal) 클릭: 닫기 (내용 영역 클릭은 무시)
    const modalBg = e.target.closest(".modal");
    if (modalBg && e.target === modalBg) modalBg.classList.remove("is-open");
  });
});
