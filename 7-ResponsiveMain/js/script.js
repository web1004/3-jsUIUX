//Navigation(탑메뉴를 객체형태로 배열에 저장)
const headerNavs = [
  { title: '강좌안내', link: '#info' },
  { title: 'HTML/CSS', link: '#html' },
  { title: 'JAVASCRIPT', link: '#js' },
  { title: '커리큘럼', link: '#curriculum' },
  { title: '문의하기', link: '#contact' }
];

const $headerNavMenu = document.querySelector('.header_nav ul');
console.log($headerNavMenu);

for(const nav of headerNavs){  //headerNavs 배열에서 nav로 하나하나씩 받음
  const $li = document.createElement('li');
  $li.classList.add('nav_item');

  const $a = document.createElement('a');
  $a.textContent = nav.title;
  $a.setAttribute('href', nav.link);

  $li.appendChild($a);
  $headerNavMenu.appendChild($li);
};


//Curriculum Bar
$currentList = document.querySelectorAll('.curriculum_list > li');
$currentProgBar = document.querySelector('.curriculum_progress .bar');

/* for(let i = 0; i < $currentList.length; i++){
  const $li = $currentList[i];

  $li.addEventListener('mouseenter', () => {
    $currentProgBar.style.width = (200 * i) + 'px';
  });
  $li.addEventListener('mouseleave', () => {
    $currentProgBar.style.width = 0;
  });
}; */

$currentList.forEach(($li, i) => {
  $li.addEventListener('mouseenter', () => {
    $currentProgBar.style.width = (200 * i) + 'px';
  });

  $li.addEventListener('mouseleave', () => {
    $currentProgBar.style.width = 0;
  });
});


//Tabmenu
const tab = document.querySelector('.tab_menu');
const tabMenu = document.querySelectorAll('.tab_menu .tab');
const tabContents = document.querySelector('.tab_contents_in');
const active = document.querySelector(".active");

tab.addEventListener("click", (e) => {
  tabMenu.forEach(function (e) {
    e.classList.remove("active");
  });
  e.target.classList.add("active");

  e.stopPropagation();
});

tabMenu.forEach((tabTarget, i) => {
  const marginLeft = [0, '-100%'][i];
  /* 
  탭의 인덱스에 따라 margin-left값을 다르게 설정
  [0, '-100%']라는 배열에서 i번째 값을 가져옴
  index가 0이면 0, index가 1이면 -100% 값을 가져옴
  결론은....
  첫번째 탭을 클릭시 margin-left:0
  두번째 탭을 클릭시 margin-left:-100%
  */
  tabTarget.addEventListener('click', () => {
    tabContents.style.marginLeft = marginLeft;
  });
});


//Mobile Navigation
const $menuBtn = document.querySelector('.mo_menu_btn');
const $headerNav = document.querySelector('.header_nav');

$menuBtn.addEventListener('click', (e) => {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('on');

  e.stopPropagation();
  //상위 요소로의 이벤트 전달을 중단
  //.tab 클릭 시 .tab_menu의 click 이벤트가 중복 실행되지 않도록 막기
});