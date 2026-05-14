const selectBtn = document.querySelector('.s1');
const fbox = document.querySelector('.footmenu1 .fbox1');

selectBtn.addEventListener('click', () => {
  selectBtn.classList.toggle('active'); 
  fbox.classList.toggle('show'); 
});