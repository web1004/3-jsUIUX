let header = document.querySelector('header');
// let nav = document.querySelector('nav');
let gnb = document.querySelector('.gnb');

/* nav에 마우스를 올리면 header높이가 270으로, 나가면 header높이를 60으로 변경*/
gnb.addEventListener('mouseenter', function(){
  header.style.height = '270px';
});
gnb.addEventListener('mouseleave', function(){
  header.style.height = '60px';
});
