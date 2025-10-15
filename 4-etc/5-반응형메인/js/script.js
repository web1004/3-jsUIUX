//Navigation
const headerNavs = [
  { title: '강좌안내', link: '#info' },
  { title: 'HTML/CSS', link: '#html' },
  { title: 'JAVASCRIPT', link: '#js' },
  { title: '커리큘럼', link: '#curriculum' },
  { title: '문의하기', link: '#contact' }
];

const $headerNavMenu = document.querySelector('.header_nav ul');
console.log($headerNavMenu);

for (const nav of headerNavs) { /*headerNavs 배열에서 nav로 하나하나씩 받음  */
  const $li = document.createElement('li');
  $li.classList.add('nav_item');

  const $a = document.createElement('a');
  $a.textContent = nav.title;
  $a.setAttribute('href', nav.link);

  $li.appendChild($a);
  $headerNavMenu.appendChild($li);
}


//Curriculum Bar
$currentList = document.querySelectorAll('.curriculum_list > li');
$currentProgBar = document.querySelector('.curriculum_progress .bar');

for (let i = 0; i < $currentList.length; i++) {
  const $li = $currentList[i];

  $li.addEventListener('mouseenter', () => {
    $currentProgBar.style.width = (200 * i) + 'px';
  });
  $li.addEventListener('mouseleave', () => {
    $currentProgBar.style.width = 0;
  });
};


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

for (let i = 0; i < tabMenu.length; i++) {
  const tabTarget = tabMenu[i];
  const marginLeft = [0, '-100%'][i];

  tabTarget.addEventListener('click', (e) => {
    tabContents.style.marginLeft = marginLeft;
  });
};


//Mobile Navigation
const $menuBtn = document.querySelector('.mo_menu_btn');
const $headerNav = document.querySelector('.header_nav');

$menuBtn.addEventListener('click', (e) => {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('on');

  // 이 요소 아래 레이어에는 클릭 이벤트가 먹히지 않도록
  e.stopPropagation();
});

document
.querySelector('body')
.addEventListener('click', () => {
  $menuBtn.classList.toggle('on');
  $headerNav.classList.toggle('on');
});