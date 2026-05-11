document.addEventListener("DOMContentLoaded", () => {

  /* sec1 */
/*   setTimeout(() => {
    document.querySelectorAll("section").forEach(section => {
      section.classList.add("active");
    });
  }, 200); */

  /* ✅ sec1만 로드시 active */
  const sec1 = document.querySelector(".sec1");
  setTimeout(() => {
    sec1.classList.add("active");
  }, 200);



  /* sec2-날짜 카운트 /////////////////////*/

  const sec2 = document.querySelector(".sec2");
  const countEl = document.querySelector(".sec2 .date-count");
  if (!sec2 || !countEl) return; //ec2 또는 date-count 없으면 실행하지 않음(안전장치)

  // 오늘 날짜 (YYYYMMDD)
  const pad2 = (n) => String(n).padStart(2, "0"); //숫자를 항상 2자리로 만들기
  /* 
  padStart()는 문자열(String)에 사용하는 내장 메서드로 문자열 앞쪽을 특정 문자로 채워서 길이를 맞춰주는 기능
  문자열.padStart(최종길이, 채울문자)
  예) "1".padStart(2, "0");  / 결과 "01"  
  */
  const d = new Date();
  const targetStr = `${d.getFullYear()}${pad2(d.getMonth() + 1)}${pad2(d.getDate())}`;
  const target = Number(targetStr); //카운팅 계산하려면 문자열 → 숫자로 변환

  let played = false; //카운팅 1번만 실행하기 위한 스위치

  // 숫자 카운팅 (setInterval 버전)
  function countUp(to, duration) {
    let current = 0;
    const stepTime = 20; // 20ms마다 갱신 (값이 작을수록 부드러움)
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

  // sec2 화면 진입 체크 (offsetTop)
  function checkSec2() {
    if (played) return;

    const scrollY = window.scrollY;
    const winH = window.innerHeight;
    const sec2Top = sec2.offsetTop;

    // sec2가 화면에 들어오면 실행 (조금 여유 +100)
    if (scrollY + winH > sec2Top + 100) {
      played = true;

      sec2.classList.add("active"); // CSS 등장효과
      countUp(target, 1200);        // 1.2초 카운팅

      window.removeEventListener("scroll", checkSec2);
    }
  }

  window.addEventListener("scroll", checkSec2);
  checkSec2(); // 처음 로드 시에도 체크
});









