let mainMenuList = document.querySelectorAll('.main');

mainMenuList.forEach((sub) => {
  sub.addEventListener('mouseenter', function(){
    target=this.children[1];
    target.style.height = target.scrollHeight+"px";  //콘텐츠를 모두 나타낼때 필요한 최소 높이의 값
  });
  sub.addEventListener('mouseleave', function(){
    target.style.height="0";
  });
});