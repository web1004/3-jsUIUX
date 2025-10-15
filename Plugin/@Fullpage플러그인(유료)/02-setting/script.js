const sec2_Title = document.querySelector('#sec2 h1.title');
const sec2_Slider = document.querySelector('#sec2 .slider_wrap');

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: false,
  //licensedeKey: '',
  navigation: true,
  anchors:['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
  afterLoad: function(old_elem, new_elem, direction){

    if(new_elem.index == 2) {
      //console.log(new_elem.index,direction)
      sec2();
			//console.log('section 2 hello!');
    }
    if(old_elem.index == 2) {
      sec2_reset();
			//console.log('section 2 good bye!');
    }

  },
});


// Section Function
function sec2(){

}

function sec2_reset(){

}



//햄버거메뉴 클릭시나오는 탑메뉴.....
const Body = document.querySelector('body');
const Nav_Btn = document.querySelector('#nav_icon');

Nav_Btn.addEventListener('click', () =>{
  Body.classList.toggle('nav_active');
});