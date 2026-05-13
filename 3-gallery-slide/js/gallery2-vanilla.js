const thumbs = document.querySelectorAll(".thumbs img");
const largeImg = document.querySelectorAll("#largeImg img");

function activate(index){
  /* 
  toggle(className, 조건) : 토글 메서드의 2번째 인자(조건) 버전
  조건이 만족하면 true → 해당 클래스를 반드시 추가
  조건이 만족하지않으면 false → 해당 클래스를 반드시 제거   
  */

  //큰 이미지 활성화 토글
  //img : 현재 순회 중인 큰 이미지 DOM 요소, i : 현재 요소의 인덱스 번호(0부터 시작)
  largeImg.forEach((img,i) => img.classList.toggle('active', i === index));

  //썸네일 active 토글
  thumbs.forEach((t,i) => t.classList.toggle('active', i === index));
};

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => activate(index));
});

activate(0);