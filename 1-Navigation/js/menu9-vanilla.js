const gnb = document.querySelector('.gnb');
const subMenus = document.querySelectorAll('.sub');
const subBgBox = document.querySelector('.sub_bgbox');
const subBgBoxImg = document.querySelector('.sub_bgbox_img');
const mainMenus = document.querySelectorAll('.main');

gnb.addEventListener('mouseenter', function () {
  subMenus.forEach(function (sub) {
    sub.style.height = '220px';
  });

  subBgBox.style.height = '220px';
});

gnb.addEventListener('mouseleave', function () {
  subMenus.forEach(function (sub) {
    sub.style.height = '0';
  });

  subBgBox.style.height = '0';
});

mainMenus.forEach(function (main) {
  main.addEventListener('mouseenter', function () {
    const sub = main.querySelector('.sub');
    const subBoxImage = main.getAttribute('data-image');

    sub.style.backgroundColor = '#dbe4ea';
    subBgBoxImg.style.backgroundImage = `url(${subBoxImage})`;
  });

  main.addEventListener("mouseleave", function () {
    const sub = main.querySelector('.sub');

    sub.style.backgroundColor = '#fff';
    subBgBoxImg.style.backgroundImage = '';
  });
});