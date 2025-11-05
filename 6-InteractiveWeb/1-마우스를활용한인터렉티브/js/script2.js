const cursorItem = document.querySelector('.cursorItem');
const circle = cursorItem.querySelector('.circle');
const buttonAll = document.querySelectorAll('a');

let x = 0;
let y = 0;
let targetX =0;
let targetY =0;
let speed = 0.09; 

buttonAll.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    circle.style.transform = 'scale(0.3)';
  });
  item.addEventListener('mouseleave', () => {
    circle.style.transform = 'scale(1)';
  });
});

window.addEventListener('mousemove', (event) => {
  x = event.pageX;
  y = event.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop); 
};
loop();