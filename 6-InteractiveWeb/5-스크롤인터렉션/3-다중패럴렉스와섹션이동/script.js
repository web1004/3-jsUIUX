document.addEventListener("DOMContentLoaded", () => {

  const sec1 = document.querySelector(".sec1");
  const sec2 = document.querySelector(".sec2");
  const sec3 = document.querySelector(".sec3");

  /* =====================
  1) sec1 → sec2 스냅
  ===================== */
  let snapped = false; //스냅을 이미 한 번 했는지(false면 아직 안 함, true면 이미 한 번 했음)

  window.addEventListener("wheel", e => {
    if (!sec1 || !sec2) return; //.sec1 또는 .sec2를 못 찾았으면(없으면) 실행 중단(안전장치)

    /* 
    window.scrollY < sec1.offsetHeight - 5 : 지금 스크롤 위치(scrollY)가 sec1 높이 안쪽이면 “sec1에 있는 중”이라고 판단
    !snapped : 아직 스냅을 안 했을 때만 동작하게
    e.deltaY > 0 : 휠을 “아래로” 내리는 중일 때만(위로 올릴 때는 X)
    */
    if (window.scrollY < sec1.offsetHeight - 5 && !snapped && e.deltaY > 0) {
      e.preventDefault(); //브라우저의 “기본 스크롤”을 잠깐 막음
      snapped = true; //이제 한 번 스냅했으니 다시는 실행되지 않도록 true로 바꿈
      window.scrollTo({ top: sec2.offsetTop, behavior: "smooth" });
      //화면을 sec2의 시작 위치로 스무스하게 이동
      //sec2.offsetTop : sec2가 문서 맨 위에서부터 얼마나 떨어져 있는지(px)
    }
  }, { passive:false });
  //passive:false는 preventDefault()를 쓰기 위해 필요함(기본값인 passive true면 preventDefault가 막혀서 경고가 뜰 수 있음)

  window.addEventListener("scroll", () => {
    if (window.scrollY < 10) snapped = false;
    //사용자가 다시 맨 위로 올라오면(scrollY < 10) snapped를 다시 false로 만들어서 “스냅을 다시 1번 가능”하게 함
  });



/* =====================
  sec2 순차 등장 (최초급 버전)
===================== */

const sec2Items = sec2 ? sec2.querySelectorAll("li") : [];
let sec2Shown = false;

window.addEventListener("scroll", () => {
  if (!sec2 || sec2Shown) return;
  
  const scroll = window.scrollY; // 현재 스크롤 위치 
  const sec2Top = sec2.offsetTop;  // sec2 시작 위치 
  const screen = window.innerHeight;  // 화면 높이

  // sec2가 화면에 들어오면 실행
  /* 
  screen * 0.8 : “화면 높이의 80%”
  sec2Top - screen * 0.8 : sec2의 시작 위치에서 화면 높이의 80%만큼 위 지점
  */
  if (scroll > sec2Top - screen * 0.8) {
    sec2Items.forEach((li, i) => {
      li.style.transitionDelay = i * 0.2 + "s";
      li.classList.add("is-show");
    });

    sec2Shown = true;
  }
});

  /* =====================
  3) sec3 다중 패럴렉스
  ===================== */
  const items3 = sec3 ? sec3.querySelectorAll("li") : [];

  window.addEventListener("scroll", () => {
    if (!sec3 || items3.length === 0) return;

    const top = sec3.offsetTop; //sec3가 문서 상단에서부터 떨어진 위치(px)
    const y = window.scrollY - top;  //“sec3 안에서 얼마나 스크롤했는지” 값

    items3.forEach((li, i) => {
      const speed = 0.15 + i * 0.03;  // 점점 빠르게(li마다 속도를 다르게 줌)
      const dir = i % 2 ? -1 : 1;     // i가 홀수면(-1) 위로, 짝수면(1) 아래로(위/아래 번갈아)
      const move = Math.max(-70, Math.min(70, y * speed * dir));
      li.style.transform = `translateY(${move}px)`;
    });
  });

  /* =====================
  nav 클릭
  ===================== */
  [sec1, sec2, sec3].forEach((sec, i) => {
    const link = document.querySelectorAll("nav a")[i];
    if (!link || !sec) return;

    link.addEventListener("click", e => {
      e.preventDefault();
      window.scrollTo({ top: sec.offsetTop, behavior: "smooth" });
    });
  });

});
