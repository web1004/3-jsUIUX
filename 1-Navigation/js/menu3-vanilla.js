let header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('.main'),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

mainMenuList.forEach((sub) => {
  sub.addEventListener('mouseenter', function(){
    subMenuHeight = this.querySelector('.submenu').offsetHeight; 
    //현재 마우스를 올린 주메뉴(this)에 해당하는 서브메뉴 자식요소의 높이를 가져옴
    header.style.height = `${headerHeight+subMenuHeight}px`;
  });
  sub.addEventListener('mouseleave', function(){
    header.style.height = `${headerHeight}px`;
  });
});