const openModalBtn = document.querySelectorAll('[data-open]');
const isVisible = 'is-visible'; 

openModalBtn.forEach((btn) => {
  btn.addEventListener('click', function(){
    const target = this.dataset.open;
    document.getElementById(target).classList.add(isVisible);
    //버튼을 클릭하면 요소검사에서 클릭한 target에 isVisible라는 클래스가 붙는것을 확인할수 있음
  });
});

//닫기버튼
const closeModalBtn = document.querySelectorAll('.close-modal');
closeModalBtn.forEach((cbtn) => {
  cbtn.addEventListener('click', function(){
    //console.log(this.parentElement.parentElement.parentElement)
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
});

//검정부분을 클릭해도 닫히게 함
document.addEventListener('click', (e) => {
  if(e.target.classList.contains('is-visible')){
    e.target.classList.remove(isVisible);
  };
});

//키보드의 ESC 키를 눌러도 닫히게 함
document.addEventListener('keyup', (e) => {
  if(e.key == 'Escape' && document.querySelector('.modal.is-visible')){
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  };
});