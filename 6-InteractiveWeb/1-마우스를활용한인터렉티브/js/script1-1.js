const h1 = document.querySelector('h1');
const box = document.querySelector('.box');

// pageX,pageY - 현재 보이는 화면이 기준
// clientX,lientY - 브라우저 기준(스크롤이 포함)

window.addEventListener('mousemove', (event) => {
  //console.log(event);
  //console.log(event.pageX, event.pageY);
  h1.innerText = `x: ${event.pageX} y:${event.pageY}`;
  box.style.top = event.pageY + 'px';
  box.style.left = event.pageX + 'px';
});
