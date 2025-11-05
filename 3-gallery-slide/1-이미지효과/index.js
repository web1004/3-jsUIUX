const cols = document.querySelectorAll('.grid .col');
const CLASS = 'animate'; //CLASS1은 상수이름으로 문자열 'animate'라는 값을 저장함, 변수이름처럼 보이지만 상수(모두대문자)이고, 개발자가 바꾸지않겠다고 선언한 값임

//화살표함수일 경우 클릭한 요소는 e.target 으로 받으면 되고, function일경우는 this로 받으면 됨
cols.forEach((col) => {
  col.addEventListener('click', function(){
    this.classList.toggle(CLASS); 
  });

  //transitionstart : 트렌지션이 시작될때
  col.addEventListener('transitionstart', function(){
    this.style.zIndex = 2;
  });

  //transitionend : 트렌지션이 끝날때
  col.addEventListener('transitionend', function(){
    //this.style.zIndex = 'auto';
    //클릭하자마자 animate가 빠지고 있어서 animate가 없을때로 수정
    if(!col.classList.contains(CLASS)){
      this.style.zIndex = 'auto';
    };
    /* 트랜지션이 끝나고 바로 빼버리면 다시 클릭하는 순간 얘가 작아질때 이미 다른 요소가 얘를 덮어쓰게 됨
    그래서 다 끝나고 난 다음에 그때 빠져야 된다.*/
  });

});