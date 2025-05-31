const slideBg = document.querySelector('#slider');
const slideSlider = document.querySelectorAll('.slide_list li');
const slideIcons = document.querySelectorAll('.slide_icons li');
const sideLeft = document.querySelector('.slide_btn.left');
const sideRight = document.querySelector('.slide_btn.right');


//(1)하단버튼
slideIcons.forEach(function(li){
  li.addEventListener('click',function(e){
    //console.log(e.target.dataset.index); //클릭한게 어떤건지 알수 있음
    let target = e.target.dataset.index;
    console.log(li.tagName);

    //(2-1)
    slideReset();  //선택한것 외에는 꺼주어야 함

    //클릭한 li의 태그명 LI라면면 (대문자로 써야 함함)
    if(li.tagName === 'LI'){
      
      for(let i=0;i<slideIcons.length;i++){
        //클릭한(target) 번호와 icons번호를 돌리다가 동일한게 있다면 클래스를 붙여준다.
        if(target==i){
					slideSlider[i].classList.add('on');
					slideIcons[i].classList.add('active');
					slideBg.style.backgroundImage=`url(image/slider_${i}.jpg)`;
				}
      }
    }; //문제:이렇게 되면 모든 버튼에  on이 켜짐
  });
});

//(3-2)
const next = (e) => {
  e.preventDefault();
  let currentSlide = document.querySelector('.slide_list li.on');  //현재 active가 붙어있는 슬라이드를 알아냄
  let i =currentSlide.dataset.index;  //현재 index의 값

  slideReset();  //초기화

  i++;
  if(i>=slideSlider.length){
		i=0;
	}

  slideSlider[i].classList.add('on');
  slideIcons[i].classList.add('active');
  slideBg.style.backgroundImage=`url(image/slider_${i}.jpg)`;
};

const prev = (e) => {
  e.preventDefault();

  let currentSlide = document.querySelector('.slide_list li.on');  //현재 active가 붙어있는 슬라이드를 알아냄
  let i =currentSlide.dataset.index;  //현재 index의 값

  slideReset();  //초기화

  i--;
  if(i<0){
		i=slideSlider.length-1;
	}

  slideSlider[i].classList.add('on');
  slideIcons[i].classList.add('active');
  slideBg.style.backgroundImage=`url(image/slider_${i}.jpg)`;
};

//(3-1)
sideRight.addEventListener('click', next);
sideLeft.addEventListener('click',prev);

//(2-2)클래스를 모두 없애줌
function slideReset(){
  slideSlider.forEach(function(elem,idx){
		slideSlider[idx].classList.remove('on');
		slideIcons[idx].classList.remove('active');
	});
};