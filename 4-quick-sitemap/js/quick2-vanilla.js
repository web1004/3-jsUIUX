const quickmenu = document.querySelector('.quickmenu');
const triggerBtn = document.querySelector('.trigger_btn');

triggerBtn.addEventListener('click', () => {
  triggerBtn.classList.toggle('active'); // X(닫기) 모양 토글
  quickmenu.classList.toggle('open'); // 아이콘 펼침/접힘 토글
});