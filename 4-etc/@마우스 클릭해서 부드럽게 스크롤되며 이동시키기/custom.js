
// 문서 객체 선언
var navTrigger = document.querySelectorAll('.menu span');
var scrollContent = document.querySelectorAll('section .content');

// .content의 상단의 값을 반환해서 변수에 담기
var showContent1 = scrollContent[0].offsetTop;
var showContent2 = scrollContent[1].offsetTop;
var showContent3 = scrollContent[2].offsetTop;

// 클릭 이벤트로 스크롤 시키기
navTrigger[0].onclick = function(){
  window.scroll({
    top: showContent1,
    behavior: 'smooth'
  });
}
navTrigger[1].onclick = function(){
  window.scroll({
    top: showContent2,
    behavior: 'smooth'
  });
}
navTrigger[2].onclick = function(){
  window.scroll({
    top: showContent3,
    behavior: 'smooth'
  });
}

