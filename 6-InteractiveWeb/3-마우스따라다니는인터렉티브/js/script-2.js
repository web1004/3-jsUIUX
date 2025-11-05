//프로세스바 구현

const h1 = document.querySelector('h1');
const progressBar = document.querySelector('.bar');
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

const percent = (num, totalNum) => {
  return Math.floor((num / totalNum) * 100);
};

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight); 

  h1.innerText = `${per}%`;
  progressBar.style.width = `${per}%`;
  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%)`;
});