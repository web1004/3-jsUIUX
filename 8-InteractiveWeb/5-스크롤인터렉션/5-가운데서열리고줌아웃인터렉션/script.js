/* 동작흐름 정리
-페이지 진입 → .intro-text 보임
-.center-text 위치 오면 → .active 클래스 추가
-CSS가 순서대로 실행
first 사라짐
문 열림
이미지 줌
이미지 사라짐
last 등장
*스크롤 다시 올리면 class 제거 → 자동 역재생

JS는 “스크롤 위치 체크 + class 토글”만 실행
*/


document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".center-text");
  if (!section) return;

  let lastY = window.pageYOffset;

  const update = () => {
    const y = window.pageYOffset;
    const goingUp = y < lastY;

    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    // 섹션 범위에 들어오면 열림 시작
    if (y >= top) section.classList.add("active");

    // ✅ 섹션 범위 안에서 위로 스크롤 시작하면 바로 닫기
    if (goingUp && y < bottom) section.classList.remove("active");

    lastY = y;
  };

  window.addEventListener("scroll", update);
  update();
});