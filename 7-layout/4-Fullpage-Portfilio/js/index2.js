//브라우저 높이 가져오기
let wh = window.innerHeight;

//브라우저창 크기 새로고침
window.addEventListener('resize', () => {
  wh = window.innerHeight;
  window.scrollTo({top:wh*a, behavior:'smooth'});
});

//메뉴 클릭시 data-idx를 기준으로 해당 섹션으로 스크롤
let gnbMenu = document.querySelectorAll('#gnb a');
let indicatorBtn = document.querySelectorAll('#dot span');

gnbMenu.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    activeReset();
    let idx = e.target.dataset.idx;
    window.scrollTo({top:wh*idx, behavior:"smooth"});
    gnbMenu[idx].classList.add('active');
    indicatorBtn[idx].classList.add('active');
  });
});

//Indicator 클릭시 스크롤이동
indicatorBtn.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    activeReset();
    window.scrollTo({top:wh*index, behavior:"smooth"});
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
let a = 0;  
let n = 0;  
let t = areas.length -1; 

areas.forEach((area,index)=>{

  area.addEventListener('wheel', (e) => {
    n = Number(e.currentTarget.getAttribute('data-idx')); 

    if(e.deltaY < 0) { 
      a = n-1; 
    } 
    else { 
      a = n+1; 
    };

    if ( a <= 0 ) { a = 0; }
    if ( a >= t ) { a = t; }

    if (n === a) return; 

    activeReset();
    window.scrollTo({top:wh*a, behavior:"smooth"});
    gnbMenu[a].classList.add('active');
    indicatorBtn[a].classList.add('active');
  });


});

//스크롤이벤트
window.addEventListener('scroll', function() {
  let sc = window.scrollY;  

  if (sc >= 0 && sc < wh) {
    a = 0;
    headerThemeForSection2(false);
  }else if (sc >= wh && sc < wh * 2) {
    a = 1;
    headerThemeForSection2(true);
  }else if (sc >= wh * 2 && sc < wh * 3) {
    a = 2;
    headerThemeForSection2(false); 
  }else if (sc >= wh * 3) {
    a = 3;
    headerThemeForSection2(false);      
  };
});


//키보드 방향키 조작 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault(); 
  } else {
    return; 
  };

  let prevA = a; 

  if (e.key === 'ArrowUp') {
    a--;
    if (a < 0) a = 0; 
  }

  if (e.key === 'ArrowDown') {
    a++;
    if (a > t) a = t; 
  }

  if (a === prevA) return;

  activeReset();
  window.scrollTo({top:wh*a, behavior:"smooth"});
  gnbMenu[a].classList.add('active');
  indicatorBtn[a].classList.add('active');
});


// JQuery
let excuted = false;  //“이미 실행했는지”를 기억, true가 되면 두 번째부터는 함수가 바로 종료돼서 중복 실행을 막음.
const charts = $('.chart'); //섹션에 왔을때마다 실행하고자 할때 함수 바깥에서 호출!

function chartAnimation(){
  if (!excuted) { // 아직 실행 안됐을 때만 실행
    //const charts = $('.chart'); //섹션에 왔을때 한번만 실행하고자 할때는 위치변경 -> 함수안에서 호출!

    charts.each(function(){  //자바스크립트의 forEach와 동일한 기능을 함
      // 각 chart DOM안에서 요소 찾고, 숫자/원형 동시 애니메이션
      let item = $(this); // 현재 순회 중인 .chart
      let title = item.find('h2'); // 중앙 숫자(퍼센트) 표시
      let targetNum = title.attr('data-num'); // 목표값(예: 80, 90)
      let circle = item.find('circle');  // 원형 그래프 SVG <circle>

      //jQuery 애니메이션은 DOM스타일만이 아니라 숫자 속성도 부드럽게 바꿀 수 있음
      //rate라는 객체를 만들어서  rate값을 0에서 targetNum(목표값)까지 1.5초동안 올림
      $({rate: 0}).animate({rate: targetNum}, { 
        duration: 1500,
        //progress콜백은 애니메이션이 진행될 때마다 호출돼서, 그때그때의 중간값 this.rate(= now)를 사용 가능.
        progress: function(){
          let now = this.rate;
          let amount = 628.32 - (628.32 * now / 100); //stroke-dashoffset 값을 계산한 결과
          /* 
          stroke-dasharray: 628.32(CSS에 이미 정의)로 “선의 총 길이”를 둘레와 같게 맞춰둔 상태
          stroke-dashoffset을 크게 주면 선이 감춰지고(0%에 가까움), 작게 주면 선이 많이 보임
          그래서 offset = 전체둘레 - (전체둘레 × 퍼센트/100) 공식을 사용
          now = 0이면 offset = 628.32 → 전부 감춤(0%)
          now = 100이면 offset = 0 → 전부 보임(100%)         
          */

          //title.text(Math.floor(now));
          // title.text(Math.floor(now) + '%'); 
          //title.text(`${Math.floor(now)}%`);
          title.html(Math.floor(now) + '<span>%</span>');
          circle.css({ strokeDashoffset: amount });
        }
      });
    });
    excuted = true; 
    // 함수 끝에서 excuted를 true로 바꿔서, 이후에 chartAnimation()을 다시 호출해도 내부가 재실행되지 않도록 잠금
  };
};

function resetCharts(){
  charts.each(function () {
    const item = $(this);
    item.find('h2').text('0');
    item.find('circle').css({ strokeDashoffset: 628.32 }); // 원래 오프셋-원형 게이지를 초기상태(0%, strokeDashoffset = 628.32)
  });
};


// 섹션2(index 1)에서만 헤더 테마를 바꾸는 함수
let headerThemeExecuted = false;
/* “현재 섹션2 테마가 적용 중인지”를 기억하는 변수로, false면 아직 적용되지 않음, true면 이미 적용됨.
같은 동작을 중복해서 실행하는 걸 막아줘(성능·깜빡임 방지). */

//섹션2가 화면에 들어왔는지 여부를 inView(불리언)로 전달받아, 테마를 켜거나 끄는 함수.
//inView === true → 섹션2에 “진입”했다고 간주 / false → 섹션2에서 “벗어남”.
function headerThemeForSection2(inView){
  const header = document.querySelector('#header');
  const dot = document.querySelector('#dot');

  //“섹션2에 들어왔고(inView), 아직 테마를 안 켰다(headerThemeExecuted === false)”면 아래 블록 실행.
  if (inView && !headerThemeExecuted) {
    header.classList.add('light');     // 검정 글자 테마 ON
    dot.classList.add('light');     // 검정 글자 테마 ON

    //섹션2에 들어올 때마다 애니메이션 “다시 재생” 허용
    excuted = false;
    chartAnimation();

    headerThemeExecuted = true;
  }else if(!inView && headerThemeExecuted){
    header.classList.remove('light');  // 기본 테마로 복구
    dot.classList.remove('light');  // 기본 테마로 복구

    //섹션2를 떠날 때 원상태로 초기화
    resetCharts();
    headerThemeExecuted = false;
  };
};









/* 
대상.animate({속성:값, 속성:값, }, 시간, 이징, 끝나면 할일);
title.animate({fontSize:'100px' }, 1000, 'swing', function(){});
title.animate({fontSize:'100px' }, {
  duration:1000,
  easing:'swing',
  complete:function(){},
  progress:function(){}
});
*/