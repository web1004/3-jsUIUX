const sec2_Title = document.querySelector('#sec2 h1.title');
const sec2_Slider = document.querySelector('#sec2 .slider_wrap');


new fullpage('#fullpage', {
	autoScrolling:true,
	scrollHorizontally: true,
  //licensedeKey: '',
	navigation: true,
	anchors:['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
	afterLoad:function(old_elem, new_elem, direction){

		if(new_elem.index == 2) {
			//console.log(new_elem.index,direction)
			sec2();
			console.log('section 2 hello!');
		}
		if(old_elem.index == 2) {
			sec2_reset();
			console.log('section 2 good bye!');
		}
	}
});


// Section Function

function sec2(){

	sec2_Title.style.cssText = `
		opacity: 1;
  	transform: translateX(50px);
	`
	sec2_Slider.style.cssText = `
		opacity: 1;
  	transform: translateX(-50px);
	`
}

function sec2_reset(){

	sec2_Title.style.cssText = `
		opacity: 0;
  	transform: translateX(-50px);
	`
	sec2_Slider.style.cssText = `
		opacity: 0;
  	transform: translateX(50px);
	`

}


const Body = document.querySelector('body');
const Nav_Btn = document.querySelector('#nav_icon');

Nav_Btn.addEventListener('click', () =>{
	//console.log('click');
	Body.classList.toggle('nav_active');
});