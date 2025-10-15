const contentAll = document.querySelectorAll(".contWrap img");
//console.log(contentAll);
const shadow = contentAll[0];
const date = contentAll[1];
const human = contentAll[2];
const textImg = contentAll[3];

let x = 0;

window.addEventListener('mousemove', (event) => {
  x = event.pageX - window.innerWidth / 2;
 //y = event.pageY - innerHeight / 2;
  //console.log(x);
  mouseMoveFunc();
});

const mouseMoveFunc = () => {
  shadow.style.transform = `translateX(${x / 35}px)`;
  date.style.transform = `translateX(${x / 20}px)`;
  human.style.transform = `translateX(${-x / 20}px)`;
  textImg.style.transform = `translateX(${-x / 10}px)`;
};
