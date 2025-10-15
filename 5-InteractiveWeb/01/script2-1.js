const cursorItem = document.querySelector('.cursorItem');

let x = 0;
let y = 0;
let targetX =0;
let targetY =0;
let speed = 0.09;

window.addEventListener('mousemove', (e) => {
  //console.log(e);
  x = e.pageX;
  y = e.pageY;
  //console.log(x,y)

  // cursorItem.style.left = x + 'px';
  // cursorItem.style.top = y + 'px';

});




const loop = () => {
  //console.log(x,y)
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  //console.log(targetX, targetY);

  // cursorItem.style.left = targetX + 'px';
  // cursorItem.style.top = targetY + 'px';

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;

  window.requestAnimationFrame(loop);

};
loop();