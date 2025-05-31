//01-클릭할 부분을 모두 불러옴
const buttons = document.querySelectorAll('.faq_question');

//02-forEach 메서드로 각각의 버튼을 순회하면서 클릭 이벤트를 등록
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faqItem = btn.parentNode; //버튼 자체가 아닌 부모(parentNode)에 active클래스를 토글
    const isActive = faqItem.classList.contains("active");

    removeActiveClasses();

    if (!isActive) {  //active클래스가 없을때...즉 닫힌항목일때 active 클래스를 추가해 활성화
      faqItem.classList.add("active");
    }    
  });
});

//03-다른 항목을 클릭했을 때 열려있는 항목을 닫을 수 있도록 active 클래스를 제거
function removeActiveClasses() {
  buttons.forEach((btn) => {
    btn.parentNode.classList.remove("active");
  });
};
