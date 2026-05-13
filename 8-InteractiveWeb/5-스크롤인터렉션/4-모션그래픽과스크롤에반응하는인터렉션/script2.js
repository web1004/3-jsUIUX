document.addEventListener("DOMContentLoaded", () => {

  //(1)특정섹션이 화면에 들어오면 공통실행
  /* 
  sectionEl : 감시할 섹션 DOM 요소
  onEnter : 섹션이 들어왔을 때 추가로 실행할 함수(콜백)
  offset = 150 : “얼마나 들어오면 실행할지” 기준 여유값(기본 150px)  
  */
  function watchSection(sectionEl, onEnter, offset = 150) {
    if (!sectionEl) return () => {}; //섹션 요소가 없으면(선택 실패) 에러 나지 않게 바로 종료(안전장치)

    let played = false; //이 섹션 애니메이션을 이미 한 번 실행했는지 기록(false면 아직 실행 전, true면 이미 실행한 상태)

    //스크롤체크 함수 
    function check() {
      if (played) return; //이미 실행된 섹션이면, 더 이상 검사하지 말고 즉시 함수 종료(중복 실행 방지)

      const scrollY = window.scrollY;  //현재 스크롤이 위에서부터 얼마나 내려왔는지(px)
      const winH = window.innerHeight; //현재 브라우저 창의 “보이는 영역 높이(px)”
      const top = sectionEl.offsetTop; //섹션이 문서(document) 맨 위에서부터 얼마나 떨어져 있는지(px)

      //“섹션이 화면에 들어왔는지” 판정
      if (scrollY + winH > top + offset) {
        /* 
        scrollY + winH : 현재 화면의 맨 아래 위치
        top + offset : 섹션의 시작점(top)에 여유값을 더한 위치
        화면 아래가 섹션 시작점(여유 포함)을 넘어가면 → “섹션이 들어왔다”고 판단!
        */
        played = true; //실행했다고 표시해서 다음부터는 다시 실행되지 않게 함
        sectionEl.classList.add("active");  //섹션에 active 클래스 붙임
        if (typeof onEnter === "function") onEnter();  //onEnter가 진짜 함수로 넘어온 경우에만 실행
        window.removeEventListener("scroll", check);  //이 섹션은 이미 끝났으니, 스크롤 이벤트에서 check를 빼버림
      }
    }

    //스크롤 할 때마다 check()가 실행
    window.addEventListener("scroll", check); 
    check(); // 처음 로드 시 바로 체크
    return check;
  }

  //(2) sec1은 로드 후 바로 active (스크롤 조건 아님)
  const sec1 = document.querySelector(".sec1");
  setTimeout(() => sec1?.classList.add("active"), 200);

  //(3) sec2 날짜 카운트 (섹션 진입 시 1번만 실행)
  const sec2 = document.querySelector(".sec2");
  const countEl = document.querySelector(".sec2 .date-count");

  const pad2 = (n) => String(n).padStart(2, "0");
  const d = new Date();
  const targetStr = `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
  const target = Number(targetStr);

  function countUp(to, duration) {
    let current = 0;
    const stepTime = 20;
    const steps = Math.floor(duration / stepTime);
    const stepValue = Math.ceil(to / steps);

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= to) {
        current = to;
        clearInterval(timer);
      }
      countEl.textContent = String(current).padStart(8, "0");
    }, stepTime);
  }

  watchSection(sec2, () => {
    if (!countEl) return;
    countUp(target, 1200);
  }, 100);

  //(4) sec3는 active만 붙이면 CSS 애니메이션이 알아서 실행됨
  const sec3 = document.querySelector(".sec3");
  watchSection(sec3, null, 150);

  //(5) sec4도 스크롤로 들어오면 active 붙이기
  const sec4 = document.querySelector(".sec4");
  watchSection(sec4, null, 150);

  //(6) sec5도 스크롤로 들어오면 active 붙이기
  const sec5 = document.querySelector(".sec5");
  watchSection(sec5, null, 150);

  //메뉴
  let nav = document.querySelectorAll('nav .menu li a');

  nav.forEach(function(anchor) {
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      //console.log(this);

      let section = document.querySelector(this.hash);
      let offTop = section.getBoundingClientRect().top + window.pageYOffset;
      /* 
      getBoundingClientRect()는 요소의 위치/크기 정보를 “현재 화면(뷰포트)” 기준으로 알려줌
      그중 .top은 요소의 윗부분이 화면 맨 위에서부터 몇 px 떨어져 있는지

      window.pageYOffset : 현재 페이지가 위에서부터 얼마나 스크롤되어 내려왔는지

      getBoundingClientRect().top은 “화면 기준”
      pageYOffset은 “문서 기준”
      */
      console.log(offTop);

      window.scrollTo({
        top: offTop,
        behavior: "smooth"
      });
    }, false);
  });

});