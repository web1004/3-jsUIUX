const menu = document.querySelector('.btn');
const tabLi = document.querySelectorAll('li');
const tabContents = document.querySelectorAll('.tabContents>div');

menu.addEventListener('click', (e) => {
  //console.log(e);
  //console.log(e.target);

  const li = e.target.closest('li'); //실제 클릭된 요소(e.target)의 가장 가까운 상위 <li>요소를 찾아 li 변수에 저장
  const id = li.dataset.alt;  //클릭된 <li>의 data-alt 속성 값을 가져옴

  //console.log(id);
  /* tabLi.forEach(function(el){
    //클릭한 li와 같은 요소라면 active클래스 추가
    if(el === li){
      el.classList.add('active');
    }
    //아니면 active클래스 제거
    else{
      el.classList.remove('active');
    };
  }); */

  //classList.toggle('active', 조건); ->add+remove
  tabLi.forEach(el => el.classList.toggle('active',el === li));

  /* tabContents.forEach(function(p){
    //만약 div의 id가 클릭된 탭의 id와 같다면
    if(p.id === id){
      p.classList.add('active');
    }
    //아니면
    else{
      p.classList.remove('active');
    };
  }); */

  tabContents.forEach(p => p.classList.toggle('active',p.id === id));
});

/* 
document.addEventListener('DOMContentLoaded', () => {
  스크립트 실행내용 모두 포함
}); 

load()는 정말 이미지 같은 리소스들까지 다 로드가 끝날때까지 기다렸다가 실행이 되고,
DOMContentLoaded() 는 DOM구조(html구조)만 로드가 되면 실행이 됨....load()보다 실행시점이 빠름
*/