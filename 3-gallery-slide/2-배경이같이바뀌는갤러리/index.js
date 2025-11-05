const slideBg = document.querySelector('#slider');
const slideSlider = document.querySelectorAll('.slide_list li');
const slideIcons = document.querySelectorAll('.slide_icons li');
const sideLeft = document.querySelector('.slide_btn.left');
const sideRight = document.querySelector('.slide_btn.right');

//(1)하단버튼
slideIcons.forEach((li) => {
  li.addEventListener('click', (e) => {
    //console.log(e.target.dataset.index);  //클릭한게 어떤건지 알수 있음
    let target = e.target.dataset.index;
    //console.log(li.tagName);
    //tagName은 요소의 태그이름을 문자열로 반환함, 항상 대문자로 반환하기 때문에 대문자로 비교해야 함

    slideReset(); //(2-2)선택한것 외에는 꺼주어야 함

    /* HTML 요소가 실제로 <li> 태그인지 확인하는 조건문
    ->클릭한 개상이 반드시 <li>태그라는 보장이 없기 때문(예를 들어 <li><span>1</span></li>)
    ->클릭 이벤트가 발생했을 때 정확히 <li> 태그가 클릭된 경우에만 실행 
    */
    if(li.tagName === 'LI'){
      for(let i=0;i<slideIcons.length;i++){
        //클릭한(target) 번호와 icons번호를 돌리다가 동일한게 있다면 클래스를 붙여준다.
        if(target==i){
          slideSlider[i].classList.add('on');
					slideIcons[i].classList.add('active');
					slideBg.style.backgroundImage=`url(image/slider_${i}.jpg)`;
        };
      }; //문제:이렇게 되면 모든 버튼에 on이 켜짐
    };
  });
});

//(3)좌우버튼
const next = (e) => {
  e.preventDefault();
  let currentSlide = document.querySelector('.slide_list li.on');  //현재 active가 붙어있는 슬라이드를 알아냄
  let i =currentSlide.dataset.index;  //현재 index의 값

  slideReset(); 

  i++;
  if(i>=slideSlider.length){
		i=0;
	};
  slideSlider[i].classList.add('on');
  slideIcons[i].classList.add('active');
  slideBg.style.backgroundImage=`url(image/slider_${i}.jpg)`;
};

const prev = (e) => {
  e.preventDefault();
  let currentSlide = document.querySelector('.slide_list li.on');  //현재 active가 붙어있는 슬라이드를 알아냄
  let i =currentSlide.dataset.index;  //현재 index의 값

  slideReset(); 

  i--;
  if(i<0){
		i=slideSlider.length-1;
	};
  slideSlider[i].classList.add('on');
  slideIcons[i].classList.add('active');
  slideBg.style.backgroundImage=`url(image/slider_${i}.jpg)`;
};

sideRight.addEventListener('click', next);
sideLeft.addEventListener('click', prev);

//(2-1)클래스를 모두 없애줌
function slideReset(){
  slideSlider.forEach(function(elem,idx){
		slideSlider[idx].classList.remove('on');
		slideIcons[idx].classList.remove('active');
	});
};