//부드러운 움직임 구현

const h1 = document.querySelector('h1');
const box = document.querySelector('.box');

let x = 0;
let y = 0;
let targetX =0;
let targetY =0;
let speed = 0.09; //0.06은 느린 감속 효과, 0.2 이상이면 빠르게 따라옴 (감속 효과가 덜함)

window.addEventListener('mousemove', (event) => {
  x = event.pageX;
  y = event.pageY;

  h1.innerText = `x: ${event.pageX} y:${event.pageY}`;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  /* 
  (x - targetX)는 목표점까지 남은 거리
  여기에 speed(0~1 사이)를 곱해 이동 속도를 제한→ 가속 → 감속 효과 발생
  예를 들어....
  만약 speed = 0.1이면
  현재 위치에서 목표 위치까지의 거리의 10%만큼씩 계속 이동
  첫 프레임: 10% 이동
  둘째 프레임: 남은 거리의 10% 이동
  셋째 프레임: 남은 거리의 10% 이동 …
  ->이 과정을 반복하면서 남은 거리가 점점 줄어들고,
  결과적으로 “빠르게 접근하다가 천천히 멈추는” 부드러운 감속 효과가 생김
  */

  // box.style.top = y + 'px';
  // box.style.left = x + 'px';

  // box.style.top = targetY + 'px';
  // box.style.left = targetX + 'px';

  //console.log(targetX.toFixed(2),targetY.toFixed(2))
  box.style.top = targetY.toFixed(2) + 'px';
  box.style.left = targetX.toFixed(2) + 'px';

  
  window.requestAnimationFrame(loop); 
  //브라우저의 화면 갱신 주기에 맞춰 함수를 반복 실행 (초당 60프레임), setInterval()보다 부드럽고 CPU 효율적
};
loop();