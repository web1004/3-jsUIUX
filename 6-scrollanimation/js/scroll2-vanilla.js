/* 애니메이션 설계
스크롤한다
→ 각 박스의 위치를 확인한다
→ 화면 안에 들어오면
→ active 클래스 추가
→ CSS transition으로 애니메이션 실행
*/

let scrollItems = document.querySelectorAll('.scroll-item');

function scrollAnimation(){  
  scrollItems.forEach((item) => {   
    let itemTop = item.getBoundingClientRect().top;  //요소가 현재 브라우저화면 위쪽에서 얼마나 떨어져 있는지를 구함
    let windowHeight = window.innerHeight;

    //(2)화면에 들어올때마다 애니메이션을 실행하고 싶을때
    if(itemTop < windowHeight - 100){ //요소가 화면으로 어느정도 들어오면 active클래스를 붙임
      item.classList.add('active');
    }else{ // 화면 밖으로 나가면 제거  
      item.classList.remove('active');
    };
  });
};

window.addEventListener('scroll',scrollAnimation); 
scrollAnimation();

/* 
scroll-item = 스크롤 애니메이션 대상
left-in / right-in / zoom-in = 어떤 효과인지 결정
active = 실제로 실행시키는 스위치
*/