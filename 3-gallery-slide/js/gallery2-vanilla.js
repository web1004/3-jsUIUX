document.addEventListener("DOMContentLoaded", () => {
  const thumbs = document.querySelectorAll(".thumbs img");
  const largeImgs = document.querySelectorAll("#largeImg img");

  function activate(index) {
    // 큰 이미지 활성화 토글
    //img : 현재 순회 중인 큰 이미지 DOM 요소, i : 현재 요소의 인덱스 번호(0부터 시작)
    /* 
    toggle(className, force) : 토글 메서드의 2번째 인자(force) 버전
    force가 true면 → 해당 클래스를 반드시 추가
    force가 false면 → 해당 클래스를 반드시 제거   
    */
    largeImgs.forEach((img, i) => img.classList.toggle("is-active", i === index));
    // 썸네일 active 토글
    thumbs.forEach((t, i) => t.classList.toggle("active", i === index));
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => activate(index));
  });

  activate(0);
});
