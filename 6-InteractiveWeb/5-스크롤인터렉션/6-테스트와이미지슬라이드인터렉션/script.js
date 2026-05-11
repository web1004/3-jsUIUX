document.addEventListener("DOMContentLoaded", () => {

  const scrollWrap = document.querySelector(".fix-scroll");
  const textBox = document.querySelector(".left-desc .text-box");
  const texts = document.querySelectorAll(".left-desc .text-box p");

  const slide = document.querySelector(".right-image-bg .slide-warp .slide");
  const slideWarp = document.querySelector(".right-image-bg .slide-warp");

  if (!scrollWrap || !textBox || !texts.length || !slide || !slideWarp) return;

  // 0~1 범위로 제한
  const clamp01 = (v) => Math.max(0, Math.min(1, v));

  // 텍스트 한 줄 이동에 해당하는 Y 값(대략: 첫 줄 높이 + gap)
  // ※ CSS gap 값을 바꾸면 아래 gap도 같이 바꿔줌
  const getStepY = () => {
    const firstH = texts[0].getBoundingClientRect().height;
    const gap = 120; // CSS의 .text-box gap과 동일하게 맞추기
    return firstH + gap;
  };

  const onScroll = () => {
    const r = scrollWrap.getBoundingClientRect();

    // sticky 구간 진행률 progress: 0 ~ 1
    const total = scrollWrap.offsetHeight - window.innerHeight;
    const scrolled = -r.top;
    const p = clamp01(scrolled / total);

    // ---------------------------------------
    // 1) LEFT: 텍스트 박스가 위로 올라오게
    // ---------------------------------------
    const stepY = getStepY();
    const maxMove = stepY * (texts.length - 1);

    // 시작 위치(아래에서 출발)
    const startOffset = 180; // CSS 초기 translateY와 맞추면 자연스러움
    const y = startOffset - maxMove * p;
    textBox.style.transform = `translateY(${y}px)`;

    // ---------------------------------------
    // 2) LEFT: 해당 줄만 흰색(active)
    //    (구간을 4등분해서 한 줄씩 바뀜)
    // ---------------------------------------
    // "절반쯤 넘어가면 다음 줄" 느낌이면 +0.5 유지
    const idx = Math.min(texts.length - 1, Math.floor(p * texts.length + 0.5));

    texts.forEach((el, i) => {
      el.classList.toggle("active", i === idx);
    });

    // ---------------------------------------
    // 3) RIGHT: 이미지 슬라이드는 "한 장씩" 이동(스냅 느낌)
    // ---------------------------------------
    const slideW = slideWarp.clientWidth; // 한 장의 너비(=518)
    const x = -(slideW * idx);            // idx에 맞춰 한 장씩 이동
    slide.style.transform = `translateX(${x}px)`;
  };

  // 최초 실행 + 이벤트 연결
  onScroll();
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);

});