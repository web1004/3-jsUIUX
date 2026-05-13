const menu = document.querySelector('.menu');
const tabs = Array.from(menu.querySelectorAll('span'));
/* 메뉴 안에 있는 각 버튼(여기서는 <span>)을 배열로 수집
NodeList가 아닌 “진짜 배열”로 만드는 이유: 아래에서 indexOf 같은 배열 메서드를 편하게 쓰기 위함 */
const sections = Array.from(document.querySelectorAll('section .content'));


//활성탭 표시함수(클릭된 탭만 .active 클래스를 갖고, 나머지는 제거)
function setActive(i){
  tabs.forEach((el, idx) => el.classList.toggle('active', idx===i));
  /* classList.toggle('active', 조건)
  두 번째 인자가 true면 무조건 추가, false면 무조건 제거
  idx===i인 요소만 true → 그 요소만 .active 유지, 나머지는 자동으로 제거
  */
};

menu.addEventListener('click', (e) => {
  const btn = e.target.closest('span');
  /* 
  e.target은 사용자가 실제로 클릭한 가장 안쪽 요소임, 아이콘이나 텍스트 노드일수도 있음
  closest('span')는 클릭 지점에서 위로 타고 올라가며 가장 가까운 <span>(탭)을 찾음 →탭 내부 어디를 눌러도 정상 동작!
  */

  if (!btn) return;  //메뉴 영역 안이지만 탭이 아닌 곳을 클릭했을 때 로직을 건너뜀
  const idx = tabs.indexOf(btn); //방금 찾은 탭이 tabs 배열에서 몇 번째인지 구함
  sections[idx]?.scrollIntoView({behavior: 'smooth'});
  //옵셔널 체이닝 ?. ->만약 idx가 잘못되거나 섹션 배열이 모자라서 sections[idx]가 undefined이면, 에러 없이 조용히 넘어감

  setActive(idx); //setActive(idx)로 현재 클릭한 탭만 .active 유지.
});

//첫번째 메뉴를 페이지 로드시 활성화
setActive(0);

/* 
scrollIntoView로 안정적인 스크롤
DOM 요소(노드)를 화면(또는 가장 가까운 스크롤 가능한 조상)의 보이는 영역으로 스크롤 해준다.
장점: 레이아웃이 변해도 offsetTop을 다시 계산할 필요가 없음. 반응형/폰트 변경 등에도 사용하기 좋음

element.scrollIntoView();               // 기본 동작(브라우저 기본값)
element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });

-부드럽게 스르륵 이동. (기본은 'auto', 즉 즉시 점프)
-block (세로 기준 정렬)
  'start': 요소 상단을 스크롤 영역의 상단에 맞춤
  'center': 요소가 중앙에 오도록
  'end': 요소 하단을 하단에 맞춤
  'nearest': 가장 가까운 가장자리로(필요한 만큼만 스크롤)
-inline (가로 컨테이너일 때만 체감, 의미는 block과 동일한 개념의 가로판)


html { scroll-behavior: smooth; }
CSS는 앵커 이동, 프로그래매틱 스크롤 등 전반에 기본 부드러움을 적용.
JS 옵션의 behavior: 'smooth'는 해당 호출에만 적용.
*/