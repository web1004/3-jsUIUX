//스크롤값 퍼센트로 나타내기(백분율)

const h1 = document.querySelector('h1');

let scrollNum = 0;
let documentHeight = 0;

const percent = (num, totalNum) => {
  return Math.floor((num / totalNum) * 100);
};

window.addEventListener('scroll', () => {
  //console.log(window.scrollY)

  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  //바디 스크롤 하이트 전체 길이 화면에서 윈도우 화면 사이즈를 빼줌
  //이렇게 빼주는 이유는 이 스크롤값이 마지막까지 가도 이 화면의 길이가 나와도 상단이 기준이기때문에 그 값을 빼줌

  h1.innerText = percent(scrollNum, documentHeight) + '%';
});