/* 애니메이션 설계
스크롤한다
→ 각 박스의 위치를 확인한다
→ 화면 안에 들어오면
→ active 클래스 추가
→ CSS transition으로 애니메이션 실행
*/

let scrollItems = document.querySelectorAll('.scroll-item');

function scrollAnimation(){

  scrollItems.forEach(function(item){
    let itemTop = item.getBoundingClientRect().top; 
    let itemBottom = item.getBoundingClientRect().bottom;
    let windowHeight = window.innerHeight;

    //스크롤을 내릴때 다시 올릴때 모두 애니메이션 실행
    if(itemTop < windowHeight - 100 && itemBottom > 100){
      /* 
      요소의 위쪽이 화면 아래쪽보다 안으로 들어왔고, 요소의 아래쪽이 화면 위쪽보다 아직 남아있으면 active 추가
      예를 들어....
      화면의 높이가 1000px이면 itemTop < 900 ->요소의 위쪽이 화면 아래 근처까지 들어왔는가를 체크함
      itemBottom > 100 -> 요소가 화면 위로 완전히 지나가진 않았는가를 체크함
      즉, 요소가 현재 화면 안에 존재하는 상태
      숫자 100은 여유 범위로 너무 늦게 실행되지 않게 또는 너무 빨리 제거되지 않게 하기 위함
      */
      item.classList.add('active');
    }else{
      item.classList.remove('active');
    }
  });
  
};

window.addEventListener('scroll', scrollAnimation);
scrollAnimation();

/* 
scroll-item = 스크롤 애니메이션 대상
fade-up / fade-left / zoom-in = 어떤 효과인지 결정
active = 실제로 실행시키는 스위치
*/