//스크롤값 퍼센트로 나타내기(백분율)

const h1 = document.querySelector('h1');

let scrollNum = 0;
let documentHeight = 0;

window.addEventListener('scroll', () => {
  //console.log(window.scrollY)

  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;

  //h1.innerText = scrollNum + 'px';
  //h1.innerText = ((scrollNum / (document.body.scrollHeight - window.innerHeight)) * 100).toFixed(0) + '%';
  h1.innerText = percent(scrollNum, documentHeight) + '%';

});

const percent = (num, totalNum) => {
  return Math.floor((num / totalNum) * 100);
};