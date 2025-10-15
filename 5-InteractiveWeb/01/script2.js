//트렌지션을 이용한 클릭시 이동

const h1 = document.querySelector('h1');
const box = document.querySelector('.box');

window.addEventListener("click", (event) => {
  h1.innerText = `x: ${event.pageX} y:${event.pageY}`;

  box.style.top = event.pageY + 'px';
  box.style.left = event.pageX + 'px';
});


//https://matthewlein.com/tools/ceaser