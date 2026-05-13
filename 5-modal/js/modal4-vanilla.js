document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item_list li");
  const modal = document.querySelector(".modal");
  const panels = document.querySelectorAll(".modal-content > li");
  const cur = document.querySelector(".page-num span:nth-child(1)");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".pre");
  const nextBtn = document.querySelector(".next");

  let index = 0;
  const last = items.length - 1;

  const show = (i) => {
    /* 
    인덱스(몇 번째 내용 보여줄지)를 “항상 안전한 범위(0 ~ last)” 안으로 강제로 맞춰주는 코드
    i : “지금 보여주고 싶은 번호” (예: next 누르면 index + 1 같은 값)
    last : 마지막 인덱스 (예: 10개면 9)

    Math.min(last, i)
    i가 너무 크면(예: 12) → last로 깎아줌(즉 “최대값은 last”로 제한)
    예) last=9 일때 Math.min(9, 12) = 9 / Math.min(9, 5) = 5

    Math.max(0, (위 결과))
    위 결과가 너무 작으면(예: -3) → 0으로 올려줌(즉 “최소값은 0”으로 제한)
    예)Math.max(0, -3) = 0  /  Math.max(0, 5) = 5
    */
    index = Math.max(0, Math.min(last, i));
    panels.forEach((p, n) => p.classList.toggle("is-on", n === index));
    cur.textContent = index + 1;
    modal.classList.add("is-open");
    modal.scrollTop = 0; //이전처럼 페이지 이동/열기마다 모달 스크롤 맨 위로
  };

  const hide = () => {
    modal.classList.remove("is-open");
    panels.forEach(p => p.classList.remove("is-on"));
  };

  items.forEach((li, i) => li.addEventListener("click", () => show(i)));

  prevBtn.addEventListener("click", () => index > 0 && show(index - 1));
  nextBtn.addEventListener("click", () => index < last && show(index + 1));
  closeBtn.addEventListener("click", hide);

  // 검정 배경 클릭 시 닫기 (내용 클릭은 제외)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) hide();
  });

  /* 
  modal.addEventListener("click", hide);
  이렇게 하면 .modal 안에 있는 모든 요소를 클릭해도 닫혀버려.
  왜냐하면 이벤트가 부모(.modal)까지 버블링되기 때문
  */

});
