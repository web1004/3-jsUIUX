//브라우저 높이 가져오기
let wh = window.innerHeight;

//브라우저 창 크기가 바뀌면, 새로 계산한 wh 높이에 따라 현재 페이지(a) 위치로 다시 스크롤 
window.addEventListener('resize', () => {
  wh = window.innerHeight;
  window.scrollTo({top:wh*a, behavior:'smooth'});
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
    window.scrollTo({top:wh*idx, behavior:"smooth"});
    gnbMenu[idx].classList.add('active');
    indicatorBtn[idx].classList.add('active');
  });
});

//Indicator 클릭시 스크롤이동
indicatorBtn.forEach((btn, index)=>{
  btn.addEventListener('click', (e) => {
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
let a = 0;  //현재 페이지번호
let n = 0;  //현재 이벤트가 발생한 .area의 index
let t = areas.length -1; //마지막 섹션의 index(0부터 시작하므로 length - 1)

areas.forEach((area,index)=>{
	
  area.addEventListener("wheel",(e)=>{ //각 해당영역에서 휠돌렸을때
    const n = Number(e.currentTarget.getAttribute('data-idx')); 
              //e.currentTarget ---> 이벤트의 대상인 해당area를 가리킴
              //요소.getAttribute('data-idx') ---> 요소의 data-idx속성값
              //Number(값) ---> 값을 계산할 수 있는 숫자로 가져옴

    //console.log(e)
    //console.log(n); //휠을 돌릴 당시 해당 area요소의 data-idx값을 출력


    /* 
    e.deltaY: 마우스 휠 방향값(음수: 위로 스크롤, 양수: 아래로 스크롤)
    */
    if(e.deltaY < 0) { 
      a = n-1; // 위로 스크롤 → 이전 섹션
    } 
    else { 
      a = n+1; // 아래로 스크롤 → 다음 섹션
    }

    //인덱스가 0보다 작거나 t보다 크지 않도록 제한
    if ( a <= 0 ) { a = 0; }
    if ( a >= t ) { a = t; }

    if (n === a) return; //n이 현재 섹션과 같으면(예: 끝에서 더 내림) 아무 것도 하지 않음

    activeReset();
    document.querySelector("#tt").innerText=a;//a값 출력
    window.scrollTo({top:wh*a, behavior:"smooth"});
    gnbMenu[a].classList.add('active');
    indicatorBtn[a].classList.add('active');
  });

});

//스크롤이벤트
window.addEventListener('scroll', function () {
  let sc = window.scrollY;  //현재 스크롤의 위치

  if (sc >= 0 && sc < wh) {
    a = 0;
  } else if (sc >= wh && sc < wh * 2) {
    a = 1;
    chartAnimation();
    //GSAP 
    // let tl = gsap.timeline();
    // tl.to('#about h2',{y:50, opacity:1, duration:1})
    // tl.to('#about p',{y:50, opacity:1, duration:1})

  } else if (sc >= wh * 2 && sc < wh * 3) {
    a = 2;

  } else if (sc >= wh * 3) {
    a = 3;
  }

  document.querySelector('#tt').innerText = a;
});


//키보드 방향키 조작 
window.addEventListener('keydown', (e) => {
  console.log(e.key);
  if (e.key === 'ArrowDown') {
    a++;
    if (a > t) a = t;
  } else if (e.key === 'ArrowUp') {
    a--;
    if (a < 0) a = 0;
  } else {
    return; // 방향키 외에는 무시
  }

  activeReset();
  window.scrollTo({ top: wh * a, behavior: 'smooth' });
  gnbMenu[a].classList.add('active');
  indicatorBtn[a].classList.add('active');
  document.querySelector("#tt").innerText = a;
});

//키보드 방향키 조작 
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();  //브라우저의 기본 스크롤 동작 차단
  } else {
    return; //다른 키 입력은 무시
  }

  // 위쪽 화살표
  if (e.key === 'ArrowUp') {
    a--;
    if (a < 0) a = 0;
  }

  // 아래쪽 화살표
  if (e.key === 'ArrowDown') {
    a++;
    if (a > t) a = t;
  }

  activeReset();
  window.scrollTo({ top: wh * a, behavior: 'smooth' });
  gnbMenu[a].classList.add('active');
  indicatorBtn[a].classList.add('active');
  document.querySelector("#tt").innerText = a;
});


  
let excuted = false;
const charts = $('.chart');

function chartAnimation() {


  if (!excuted) {
    charts.each(function () {
      let item = $(this);
      let title = item.find('h2');
      let targetNum = title.attr('data-num');
      let circle = item.find('circle');

      $({ rate: 0 }).animate({ rate: targetNum }, {
        duration: 1500,
        progress: function () {
          let now = this.rate;
          // console.log(now);
          let amount = 628.32 - (628.32 * now / 100);
          title.text(Math.floor(now));
          circle.css({ strokeDashoffset: amount });
        }
      })

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
    });
    excuted = true;
  }
};

