let mainMenuList = document.querySelectorAll('.main');

mainMenuList.forEach((sub)=>{
  sub.addEventListener('mouseenter', function(){
    target=this.children[1];
    target.style.height = target.scrollHeight+"px";
  });
  sub.addEventListener('mouseleave', function(){
    target.style.height="0";
  });
});


/* 
offsetHeight : 수직의 패딩과 테두리를 포함아여 요소의 높이를 정수로 반환
clientHeight : 요소의 내부높이를 픽셀로 반환, padding은 포함하지만 수평스클로바의 높이,경계선,margin 은 포함하지 않는다.
scrollHeight : 수직스크롤바를 사용하지 않고 요소의 콘텐츠를 모두 나타낼때 필요한 최소 높이의 값과 동일하다.
높이 측정은 clientHeight와 동일한 방법을 사용하여 요소의 안쪽여백은 포함하고, 테두리와 바깥여백은 포함하지않는다.
*/