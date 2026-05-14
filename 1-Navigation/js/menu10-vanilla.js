const mainLinks = document.querySelectorAll('.gnb > .main > a');

mainLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const sub = link.nextElementSibling;

    // 이미 열려있는지 확인
    const isOpen = sub.classList.contains('active');

    // 모든 서브메뉴 닫기
    document.querySelectorAll('.sub').forEach(function (item) {
      item.classList.remove('active');
      item.style.maxHeight = '0';
    });

    // 모든 화살표 원래대로
    mainLinks.forEach(function (item) {
      item.classList.remove('uparrow');
    });

    // 닫혀있던 메뉴라면 열기
    if (!isOpen) {
      sub.classList.add('active');
      sub.style.maxHeight = sub.scrollHeight + 'px';
      link.classList.add('uparrow');
    }
  });
});