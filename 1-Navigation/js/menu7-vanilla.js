const trigger = document.querySelector('.trigger');
const modalGnb = document.querySelector('.modal-gnb');

trigger.addEventListener('click', function () {
  trigger.classList.toggle('active');
  modalGnb.classList.toggle('active');
});