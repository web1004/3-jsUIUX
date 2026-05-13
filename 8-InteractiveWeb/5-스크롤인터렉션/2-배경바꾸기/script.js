document.addEventListener("DOMContentLoaded", () => {

  const area = document.querySelector(".all-area");
  const bgs = [...document.querySelectorAll(".all-area .bg")];
  const logo = document.querySelector(".down-logo");
  const character = document.querySelector(".sticker"); 
  if (!area || !bgs.length) return; //.all-area가 없거나, .bg가 하나도 없으면 이후 코드를 실행해봤자 의미가 없으니 그냥 종료(안전장치)

  /* 
  idx는 “지금 몇 번째 배경(섹션)인가?”를 의미하는 숫자임(0,1,2,3...)
  bgs 배열을 하나씩 돌면서, 현재 요소의 순서 i가 idx와 같으면 active 클래스를 붙이고, 다르면 active 클래스를 뺌
  toggle("active", 조건) : 조건이 true면 active 추가, 조건이 false면 active 제거

  logo?는 “logo가 있을 때만 실행해”라는 안전장치(optional chaining)
  idx === bgs.length - 1 : 마지막 센션을 뜻함
  */
  const setActive = (idx) => {
    bgs.forEach((bg, i) => bg.classList.toggle("active", i === idx));
    logo?.classList.toggle("is-drop", idx === bgs.length - 1);
  };

  const onScroll = () => {
    const max = area.offsetHeight - innerHeight;  
    /* 
    전체 스크롤 가능한 범위를 계산
    area.offsetHeight = all-area의 전체 높이(px)
    innerHeight = 화면에 보이는 창 높이(px)
    그래서 전체높이 - 화면높이가 “맨 아래까지 내릴 수 있는 최대 스크롤 값”
    */
    const y = Math.max(0, Math.min(scrollY, max));      // 0~max로 clamp
    /* 
    scrollY는 현재 스크롤 위치
    계산 안정성을 위해 “0보다 작거나 max보다 큰 값”이 나오지 않게 범위를 강제로 제한
    Math.min(scrollY, max) : max보다 크면 max로 잘라줌
    Math.max(0, ...) : 0보다 작으면 0으로 올려줌
    */

    //스크롤을 배경 개수만큼 나누기
    const sectionHeight = max / bgs.length;

    let idx = 0;

    if (y >= sectionHeight * 3) idx = 3;
    else if (y >= sectionHeight * 2) idx = 2;
    else if (y >= sectionHeight) idx = 1;

    setActive(idx);

    //캐릭터 패럴렉스 (최대 이동 제한)
    if (character) {
      const move = Math.min(y * 0.08, 450); // 180px 이상 내려가지 않게
      character.style.transform = `translateY(${move}px)`;
    }
    
  };

  addEventListener("scroll", onScroll);
  addEventListener("resize", onScroll);
  onScroll(); // 첫 화면 세팅

});
