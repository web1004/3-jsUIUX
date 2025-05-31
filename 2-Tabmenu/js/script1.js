const tab = document.querySelector("#tab");
const tabMenuList = document.querySelectorAll(".tabMenu li");
const tabContent = document.querySelectorAll(".tabContents>div");
//const active = document.querySelector(".active");
//const showing = document.querySelector("show");

/* 각 탭메뉴에 이벤트리스너를 만들어주는것이 아니라 부모한테 리스너틀 만들어준다.
이게 가능한 이유는 e.target 을 이용하면 이벤트 리스너가 알아서 "이 카테고리를 누르는거구나"라고 알아서 실제 클릭하고 요쇼한테 이벤트를 실행해주기 때문이다.*/


/* 먼저 tabMenuList의 배열을 빙글빙글 돌며 모든 항목의 active를 제거하고 내가 실제로 클릭한 항목에만 active 클래스를 부여한다.*/
tab.addEventListener("click", (e) => {
  //console.log(e.target);
  //console.log(e.target.dataset.alt);
  const ListOrder = e.target.dataset.alt;
  tabMenuList.forEach(function (e) {
    e.classList.remove("active");
  });
  e.target.classList.add("active");

/* tabContent의 배열을 빙글빙글 돌며 해당 요소가 ListOrder( 위에서 클릭한 요소의 데이터 값 )과 동일한 데이터 값을 가지고 있다면 show 클래스를 부여하고, 그게 아닐 경우 show 클래스를 제거한다.*/
  tabContent.forEach(function (event) {
    if (event.dataset.order == ListOrder) {
      event.classList.add("show");
    } else {
      event.classList.remove("show");
    }
  });
});