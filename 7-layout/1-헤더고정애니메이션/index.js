const body = document.querySelector('body');
const className = 'sticky';

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY; //스크롤의 높이값을 변수에 저장
  if(currentScroll > 0){
    body.classList.add(className);
  }else{
    body.classList.remove(className);
  };
});