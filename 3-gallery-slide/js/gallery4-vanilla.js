document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".largeImg li");
  const texts = document.querySelectorAll(".imgText li");
  const thumbs = document.querySelectorAll(".thumbs li");
  const prev = document.querySelector("#gallery .left_btn");
  const next = document.querySelector("#gallery .right_btn");

  const last = slides.length - 1;
  let current = 0;

  const setActive = (index) => {
    slides.forEach((el, i) => el.classList.toggle("is-active", i === index));
    texts.forEach((el, i) => el.classList.toggle("is-active", i === index));
    thumbs.forEach((el, i) => el.classList.toggle("active", i === index));
    current = index;
  };

  /* const move = (dir) => {
    let nextIndex = current + dir;

    if (nextIndex < 0) nextIndex = slides.length - 1;
    if (nextIndex > slides.length - 1) nextIndex = 0;

    setActive(nextIndex);
  }; */

  //위 소스를 한줄로 압축
  const move = (dir) => setActive((current + dir + slides.length) % slides.length);
  /* 
  (current + dir + slides.length)
  current : 현재 보여지는 인덱스(예: 0~9)
  dir : 이동 방향(+1 또는 -1)
  slides.length : 총 슬라이드 개수(예: 10)

  + slides.length 를 더한 이유는 “이전”일 때 음수 방지
  예를 들어 현재가 0에서 이전을 누르면:
  current + dir = 0 + (-1) = -1 이 되므로
  이 상태로 %(나머지)를 쓰면 JS에서는 -1 % 10 = -1 처럼 음수가 남을 수 있음
  그래서 미리 + slides.length(10)을 더해서:
  -1 + 10 = 9 로 만들어 “맨 끝”으로 안전하게 보냄

  ... % slides.length (%는 나머지 연산자)
  [다음 버튼에서 순환]
  예: current가 9(마지막)이고 다음(+1)을 누르면
  current + dir + length = 9 + 1 + 10 = 20
  20 % 10 = 0
  → 마지막에서 다음 누르면 다시 0(처음)으로.

  [이전 버튼에서 순환]  
  예: current가 0이고 이전(-1)을 누르면
  0 + (-1) + 10 = 9
  9 % 10 = 9
  → 처음에서 이전 누르면 9(마지막)로.
  */

  thumbs.forEach((li, i) => li.addEventListener("click", () => setActive(i)));

  prev.addEventListener("click", (e) => { e.preventDefault(); move(-1); });
  next.addEventListener("click", (e) => { e.preventDefault(); move(1); });

  setActive(0);
});

