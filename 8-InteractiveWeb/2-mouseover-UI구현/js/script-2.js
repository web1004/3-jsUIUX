const contentAll = document.querySelectorAll(".contWrap img");
//console.log(contentAll);

const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

let x = 0;
let targetX = 0;
const speed = 0.06;

window.addEventListener('mousemove', (event) => {
  x = event.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${x / 35}px)`;
  date.style.transform = `translateX(${x / 20}px)`;
  human.style.transform = `translateX(${-x / 20}px)`;
  textImg.style.transform = `translateX(${-x / 10}px)`;
  window.requestAnimationFrame(loop);
};
loop();