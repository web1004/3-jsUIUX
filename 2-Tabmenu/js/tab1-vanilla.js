// document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.btn');
  const tabLi = document.querySelectorAll('li')
  const tabContents = document.querySelectorAll('.tabContents > div')

  menu.addEventListener('click', (e) => {
    //console.log(e);
    //console.log(e.target);

    
    const li = e.target.closest('li');   //실제 클릭된 요소(e.target)의 가장 가까운 상위 <li>요소를 찾아 li 변수에 저장
    const id = li.dataset.alt;   //클릭된 <li>의 data-alt 속성 값을 가져옴

    tabLi.forEach(function(el) {
      // 클릭한 li와 같은 요소라면 active 클래스 추가
      if (el === li) {
        el.classList.add('active');
      } 
      // 아니면 active 클래스 제거
      else {
        el.classList.remove('active');
      }
    });

    //classList.toggle('active', 조건)
    //tabLi.forEach(el => el.classList.toggle('active', el === li)); 
    
    
    tabContents.forEach(function(p) {
      // 만약 div의 id가 클릭된 탭의 id와 같다면
      if (p.id === id) {
        // active 클래스 추가 (보이게)
        p.classList.add('active');
      } 
      // 아니면
      else {
        // active 클래스 제거 (숨기기)
        p.classList.remove('active');
      }
    });

    //tabContents.forEach(p => p.classList.toggle('active', p.id === id));   
  });

// });