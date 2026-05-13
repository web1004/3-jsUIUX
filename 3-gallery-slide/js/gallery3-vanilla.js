const gallery = document.querySelector("#gallery");
const track = document.querySelector("#largeImg");
const imgs = document.querySelectorAll("#largeImg img");
const dots = document.querySelectorAll(".thumbs a");

// 현재 보이는 슬라이드 인덱스
let current = 0;

// 슬라이드 폭(= 갤러리 폭)을 기준으로 이동
const slideWidth = () => gallery.clientWidth;

function goTo(index) {
  current = index;
  track.style.transform = `translateX(${-slideWidth() * current}px)`;

  //active 이동
  dots.forEach((a, i) => a.classList.toggle("active", i === current));
}

dots.forEach((a, index) => {
  a.addEventListener("click", (e) => {
    e.preventDefault(); // href="#none" 기본 이동 막기
    goTo(index);
  });
});

// 초기 상태
goTo(0);

// (선택) 창 크기 바뀌면 현재 슬라이드 위치 재계산
window.addEventListener("resize", () => goTo(current));