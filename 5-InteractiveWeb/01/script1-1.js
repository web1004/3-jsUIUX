const h1 = document.querySelector('h1');
const box = document.querySelector('.box');

window.addEventListener("mousemove", (event) => {
  //console.log(event);
  //console.log(event.pageX, event.pageY);
  h1.innerText = `x: ${event.pageX} y:${event.pageY}`;
  box.style.top = event.pageY + 'px';
  box.style.left = event.pageX + 'px';
});


/* page와 client의 비교
window.addEventListener("click", (event) => {
  console.log(event.pageX, event.pageY);
  console.log(event.clientX, event.clientY);
  
  h1.innerText = `x: ${event.pageX} y:${event.pageY}`;
  box.style.top = event.pageY + 'px';
  box.style.left = event.pageX + 'px';
}); */


// pageX,pageY - 현재 보이는 화면이 기준
// clientX,lientY - 브라우저 기준(스크롤이 포함)

//나비이미지 : https://www.paradamstudios.com/


//부드러운 움직임 구현

const loop = () => {
  //console.log(1);
  window.requestAnimationFrame(loop); //함수를 계속 호출
};
loop();
