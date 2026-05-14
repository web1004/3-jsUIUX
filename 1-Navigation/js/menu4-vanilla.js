let mainMenuList = document.querySelectorAll('.main');

mainMenuList.forEach((sub) => {
  sub.addEventListener('mouseenter', function(){
    target = this.children[1];
    target.style.height = target.scrollHeight + 'px';
  });
  sub.addEventListener('mouseleave', function(){
    target.style.height='0';
  });
});