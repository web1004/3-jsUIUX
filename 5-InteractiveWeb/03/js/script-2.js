//프로세스바 구현

const h1 = document.querySelector('h1');
const progressBar = document.querySelector('.bar');


let scrollNum = 0;
let documentHeight = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + '%'; 

  h1.innerText = per;
  progressBar.style.width =  per;
});

const percent = (num, totalNum) => {
  return Math.floor((num / totalNum) * 100);
};