let header = document.querySelector('header'),
    mainMenuList = document.querySelectorAll('.main'),
    subMenu = document.querySelectorAll('.submenu'),
    headerHeight = header.offsetHeight,
    subMenuHeight = 0;

mainMenuList.forEach((sub)=>{
  sub.addEventListener('mouseenter', function(){
    subMenuHeight = this.querySelector('.submenu').offsetHeight;  //해당하는 자식요소의 높이를 가져옴
    header.style.height = headerHeight + subMenuHeight + 'px';
  });
  sub.addEventListener('mouseleave', function(){
    header.style.height = headerHeight + 'px';
  });
});