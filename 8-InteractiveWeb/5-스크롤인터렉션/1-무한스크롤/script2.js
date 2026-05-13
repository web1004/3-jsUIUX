document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(".port-list ul li");
  let i = 0;

  // 다음 3개 보여주기
  /* 
  for(초기값; 반복조건; 반복할 때마다 실행)
  k는 “이번 show() 호출에서 몇 개를 보여줬는지” 세는 카운터
  show()가 실행될 때마다 k는 0부터 다시 시작

  k < 3 && i < items.length  (&& = 둘 다 참이어야 반복)
  k < 3 : 이번에 3개까지만 보여주겠다
  i < items.length : 아이템 개수를 넘기면 멈추겠다(배열 끝 보호)
  즉, 3개를 다 보여주면 종료, 아이템이 더 이상 없으면 종료 -> 둘 중 하나라도 만족 못 하면 반복 끝
  
  */
  const show = () => {
    for (let k = 0; k < 3 && i < items.length; k++, i++) {
      items[i].style.display = "block";
      items[i].classList.add("is-show");
    }
  };

  show(); // 처음 3개

  //스크롤이 거의 맨 아래까지 내려오면 show() 실행
  /* 
  window.scrollY : 페이지를 위에서부터 얼마나 내려왔는지(px) 값
  innerHeight : 지금 브라우저에서 눈에 보이는 화면 높이(px)
  scrollY + innerHeight : 현재 화면의 맨 아래가 문서의 어디쯤인지

  document.documentElement.scrollHeight : 페이지 전체(문서)의 높이(px) - 콘텐츠가 길면 이 값도 커짐
  scrollHeight : 페이지 끝까지의 총 높이
  -100 : “정확히 끝”이 아니라 끝에서 100px 정도 남았을 때부터 미리 로드(로딩이 살짝 늦어서 끊기는 느낌을 줄이기 위한 “여유 거리”)

  전체 조건을 한 문장으로 해석하면......
  현재 화면의 맨 아래 위치가 페이지 전체 높이의 끝(-100px) 지점에 도달했냐?
  
  */
  window.addEventListener("scroll", () => {
    if (window.scrollY + innerHeight >= document.documentElement.scrollHeight - 100) {
      show();
    }
  });

});
