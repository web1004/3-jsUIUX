const items = document.querySelectorAll('.navi li');
const photo = document.querySelector('.photo');

items.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    const changeImage = item.getAttribute('data-image');
    photo.style.backgroundImage = `url(${changeImage})`;
  });

  item.addEventListener('mouseleave', function () {
    photo.style.backgroundImage = '';
  });
});