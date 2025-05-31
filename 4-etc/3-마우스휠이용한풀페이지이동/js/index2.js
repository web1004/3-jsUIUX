//브라우저 너비 가져오기
let ww = window.innerWidth;

//브라우저 창 크기가 바뀌면, 새로 계산한 ww 너비에 따라 현재 페이지(a) 위치로 다시 스크롤 
window.addEventListener('resize', () => {
  ww = window.innerWidth;
  window.scrollTo({left:ww*a, behavior:'smooth'});
});

//메뉴 클릭시 data-idx를 기준으로 해당 섹션으로 스크롤
let gnbMenu = document.querySelectorAll('#gnb li');
let indicatorBtn = document.querySelectorAll('#dot span');

gnbMenu.forEach((menu)=>{

  menu.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(e.target.dataset.idx)
    activeReset();
    let idx = e.target.dataset.idx;
    window.scrollTo({left:ww*idx, behavior:"smooth"});
    gnbMenu[idx].classList.add('active');
    indicatorBtn[idx].classList.add('active');
  });

});

//Indicator 클릭시 스크롤이동
indicatorBtn.forEach((btn, index)=>{
  btn.addEventListener('click', (e) => {
    activeReset();
    window.scrollTo({left:ww*index, behavior:"smooth"});
    gnbMenu[index].classList.add('active');
    indicatorBtn[index].classList.add('active');
  });
});

//모든 메뉴와 인디케이터에서 .active 클래스 제거
function activeReset(){
  indicatorBtn.forEach(function(elem,idx){
		indicatorBtn[idx].classList.remove('active');
    gnbMenu[idx].classList.remove('active');
	});
};


//마우스 휠 스크롤 처리
const areas = document.querySelectorAll(".area");
let a = 0;  //현재 페이지번호
let n = 0;  // 이벤트 발생한 섹션의 index
let t = areas.length -1; //마지막 섹션의 index(0부터 시작하므로 length - 1)

areas.forEach((area,index)=>{
	
  area.addEventListener("wheel",(e)=>{ //각 해당영역에서 휠돌렸을때
    n = Number( e.currentTarget.getAttribute('data-idx') ); 
              //e.currentTarget ---> 이벤트의 대상인 해당area를 가리킴
              //요소.getAttribute('data-idx') ---> 요소의 data-idx속성값
              //Number(값) ---> 값을 계산할 수 있는 숫자로 가져옴

    //console.log(e)
    console.log(n); //휠을 돌릴 당시 해당 area요소의 data-idx값을 출력


    /* 
    e.deltaY: 마우스 휠 방향값(음수: 위로 스크롤, 양수: 아래로 스크롤)
    */
    if(e.deltaY > 0) { // 휠 아래 → 오른쪽 이동
      a = n+1; 
    } 
    else {  // 휠 위 → 왼쪽 이동
      a = n-1; 
    }

    //인덱스가 0보다 작거나 t보다 크지 않도록 제한
    if ( a <= 0 ) { a = 0; }
    if ( a >= t ) { a = t; }

    activeReset();
    document.querySelector("#tt").innerText=a;//a값 출력
    window.scrollTo({left:ww*a, behavior:"smooth"});
    gnbMenu[a].classList.add('active');
    indicatorBtn[a].classList.add('active');
  });

});

//스크롤이벤트
window.addEventListener('scroll', function () {
  let sc = window.scrollX;

  if (sc >= 0 && sc < ww) {
    a = 0;
  } else if (sc >= ww && sc < ww * 2) {
    a = 1;
  } else if (sc >= ww * 2 && sc < ww * 3) {
    a = 2;
  } else if (sc >= ww * 3) {
    a = 3;
  }

  document.querySelector('#tt').innerText = a;
});

//키보드 방향키 조작 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
  } else {
    return;
  }

  // 좌우 키로 페이지 이동
  if (e.key === 'ArrowLeft') {
    a--;
    if (a < 0) a = 0;
  }

  if (e.key === 'ArrowRight') {
    a++;
    if (a > t) a = t;
  }

  activeReset();
  window.scrollTo({ left: ww * a, behavior: 'smooth' });
  gnbMenu[a].classList.add('active');
  indicatorBtn[a].classList.add('active');
  document.querySelector("#tt").innerText = a;
});