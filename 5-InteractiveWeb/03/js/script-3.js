//페럴렉스 페이지 준비하기

const depthWrap = document.querySelector(".depthWrap");
const progressBar = document.querySelector('.bar');
const submarine = document.querySelector(".submarine");
const octopus = document.querySelector(".octopus");

let scrollNum = 0;
let documentHeight = 0;
let per = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight); 

  depthWrap.querySelector("span").innerText = scrollNum + 'm';
  progressBar.style.width =  per;

  submarine.style.transform = `translateX(${per}%)`;
  octopus.style.transform = `translateY(${-per / 3}%)`;
});

const percent = (num, totalNum) => {
  return Math.floor((num / totalNum) * 100);
};