const items = [...document.querySelectorAll(".port-list ul li")];  //spread연산자(...) -> 선택된 목록을 배열로 바꾸어서 전부 변수에 담는다. 
const btn = document.querySelector(".load-more");
const step = 3;  //한번에 3개씩 보여주기
let shown = 0; //지금까지 몇 개를 보여줬는지 저장하는 변수로 처음에는 아무것도 안보여줬으니까 0

const showNext = () => {
  /* 
  slice(시작, 끝 인덱스 직전)
  items.slice(0, 3) -> 0번, 1번, 2번 li ->즉 처음 3개
  items.slice(0, 3) -> items.slice(3, 6)
  */
  items.slice(shown, shown + step).forEach((li) => (li.style.display = "block"));
  shown += step;  //보여주는 개수 3개씩 증가
  if (shown >= items.length) btn.style.display = "none"; //보여준 개수가 전체 개수보다 같거나 많아지면 버튼을 숨김
};

btn.addEventListener("click", showNext);
showNext(); // 처음 3개 표시