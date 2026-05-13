const buttons = document.querySelectorAll('.faq_question');

//forEach 메서드로 각각의 버튼을 순회하면서 클릭 이벤트를 등록
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const faqItem = btn.parentNode; //버튼 자체가 아닌 부모(parentNode)에 active클래스를 토글
    const isActive = faqItem.classList.contains("active"); //"active" 클래스가 있는지 검사(있으면 true, 없으면 false)

    //console.log(faqItem);
    //console.log(isActive);

    removeActiveClasses();

    //active클래스가 없을때...즉 닫힌항목일때 active 클래스를 추가해 활성화
    //이미 active가 있는것을 클릭하면 클래스 추가를 하지 않아야 함
    if(!isActive){
      faqItem.classList.add("active");
    };
  });
});

//다른 항목을 클릭했을때 열려있는 항목들은 닫을수 있도록 active클래스 제거
function removeActiveClasses(){
  buttons.forEach((btn) => {
    btn.parentNode.classList.remove("active");
  });
};