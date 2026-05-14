const sidebar = document.querySelector('.sidebar-content');
const btn = document.querySelector('.btn-sidebar');
const icon = btn.querySelector('.btn-sidebar i');
const text = btn.querySelector('.btn-sidebar span');

btn.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('active');

  //classList.toggle(클래스명, 조건) 
  icon.classList.toggle('fa-angle-right',!isOpen); //사이드바가 닫혀있을때(active가 안붙은상태)
  icon.classList.toggle('fa-angle-left',isOpen); //사이드바가 열려있을때(active가 붙은상태)
  
  //삼항연산자: 조건 ? true일때 실행 : false일때 실행;
  text.textContent = isOpen ? 'close' : 'open';
});