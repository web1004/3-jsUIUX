//부드러운 움직임 구현

const h1 = document.querySelector('h1');
const box = document.querySelector('.box');

let x = 0;
let y = 0;
let targetX =0;
let targetY =0;
let speed = 0.06;  //숫자가 클수록 빠름


window.addEventListener("mousemove", (event) => {
  x = event.pageX;
  y = event.pageY;

  h1.innerText = `x: ${event.pageX} y:${event.pageY}`;
  // box.style.top = event.pageY + 'px';
  // box.style.left = event.pageX + 'px';
});

const loop = () => {
  //console.log(1);

  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;


  // box.style.top = y + 'px';
  // box.style.left = x + 'px';

  // box.style.top = targetY + 'px';
  // box.style.left = targetX + 'px';

  //console.log(targetX.toFixed(2),targetY.toFixed(2))
  box.style.top = targetY.toFixed(2) + 'px';
  box.style.left = targetX.toFixed(2) + 'px';

  window.requestAnimationFrame(loop); //함수를 계속 호출
};
loop();
