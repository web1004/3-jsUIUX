let header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('.main'),
    subMenu = document.querySelectorAll('.submenu'),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

/* 
let B = A.offsetHeight;  //padding,border까지의 높이
let B = A.clientHeight;  //padding까지의 높이
변수명 subMenuHeight에 subMenu 중에서 가장 높이가 큰 요소의 높이를 구해서 저장
*/

/*제일 마지막 높이를 가져옴 
subMenuHeight = subMenu[0].offsetHeight;
subMenuHeight = subMenu[1].offsetHeight;
subMenuHeight = subMenu[2].offsetHeight;
subMenuHeight = subMenu[3].offsetHeight;
subMenuHeight = subMenu[4].offsetHeight; */

/* 0번째 높이를 구했을때 초기값보다 0보다 크기까 그 다음 실행
  1번째 높이가 200인데 100보다 크니까 실행이 되고 200이 저장 */
subMenu.forEach((eh) =>{
  if(eh.offsetHeight > subMenuHeight){
    subMenuHeight = eh.offsetHeight; 
  }
});

//console.log(subMenuHeight);

/* 
mainMenuList에 마우스를 올리면 header의 높이를 headerHeight 와 subMenuHeight를 더한 최종 크기로 변경
mainMenuList에 마우스를 나가면 headerHeight로 변경
*/
mainMenuList.forEach((sub)=>{
  sub.addEventListener('mouseenter', function(){
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  sub.addEventListener('mouseleave', function(){
    header.style.height = headerHeight + 'px';
  });
});



/* 
offsetHeight : 수직의 패딩과 테두리를 포함아여 요소의 높이를 정수로 반환
clientHeight : 요소의 내부높이를 픽셀로 반환, padding은 포함하지만 수평스클로바의 높이,경계선,margin 은 포함하지 않는다.
scrollHeight : 수직스크롤바를 사용하지 않고 요소의 콘텐츠를 모두 나타낼때 필요한 최소 높이의 값과 동일하다.
높이 측정은 clientHeight와 동일한 방법을 사용하여 요소의 안쪽여백은 포함하고, 테두리와 바깥여백은 포함하지않는다.
*/