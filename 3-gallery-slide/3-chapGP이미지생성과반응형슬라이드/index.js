const slider = document.querySelector('.slider');

/* 이문서에서 이벤트가 일어났을때 클래스명이 이전과 다음이 일치하는지를 확인해서 작동하게 함 */
document.addEventListener('click', (e) => {
  const items = document.querySelectorAll('.item');

  if(e.target.matches('.next')){ //next(첫번째를 맨뒤로)
    slider.append(items[0]);
  }
  if(e.target.matches('.prev')){  //prev(마지막번째를 맨앞으로)
    slider.prepend(items[items.length-1]);
  }
}); 

/* 단축평가 : if(조건1 && 조건2) {   } */
//document.addEventListener('click', activate);
//
//function activate(e){
//  const items = document.querySelectorAll('.item');
//
//  e.target.matches('.next') && slider.append(items[0]);
//  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
//};