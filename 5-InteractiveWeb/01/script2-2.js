const cursorItem = document.querySelector('.cursorItem');
const circle = cursorItem.querySelector('.circle');
const buttonAll = document.querySelectorAll('a');

let x = 0;
let y = 0;
let targetX =0;
let targetY =0;
let speed = 0.09;

buttonAll.forEach((item) => {
  //console.log(item);
  item.addEventListener('mouseenter', () => {
    //circle.style.display = "none";
    circle.style.transform = 'scale(0.3)';
  });
  item.addEventListener('mouseleave', () => {
    //circle.style.display = "block";
    circle.style.transform = 'scale(1)';

  });
});



window.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;

});


//네,아니오 버튼 호버시 배경이 화이트, 텍스트가 검정
//호버시 써클이 작아짐

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;


  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);

};
loop();