//(1) 이미지를 클릭하면 모달박스가 보이게 함

let currentIndex =  0;
const gallery = document.querySelector('.gallery'),
      modalBox = document.querySelector('#modalBox'),
      images = gallery.querySelectorAll('img'),  //images는 NodeList이므로 Array.from()으로 배열로 변환해야 indexOf() 사용 가능
      totalImages = images.length,
      closeBtn = document.querySelector('.close-btn'),
      prevBtn = document.querySelector('.prev-btn'),
      nextBtn = document.querySelector('.next-btn');

//(1)
gallery.addEventListener('click', openModalBox); 


//(2)
function openModalBox(e){
  console.log(e.target.tagName);

  //이벤트가 일어난 요소의 태그이름이 IMG라면 그 이미지의 index번호를 알아야 함
  //클릭된 요소가 이미지(IMG)인 경우에만 아래 코드를 실행
  if(e.target.tagName == 'IMG'){
    const clickedIndex = Array.from(images).indexOf(e.target);
    currentIndex = clickedIndex; //클릭한 이미지의 index를 구해서 currentIndex에 저장
    console.log(currentIndex);

    modalBox.style.display = 'flex';
  }
};


/* forEach로 하는 방법법
function openModalBox(e) {
  if (e.target.tagName === 'IMG') {
    images.forEach((img, index) => {
      if (img === e.target) {
        currentIndex = index;
        console.log(currentIndex);
      }
    });
  }
} */


/* 
유사배열이란?
배열처럼 보이지만 실제 배열이 아닌 객체입니다.
즉, index(예: obj[0], obj[1])와 length 속성은 있지만, 배열 메서드(map, forEach, filter 등)는 사용할 수 없다.

예)
const images = document.querySelectorAll('img');

querySelectorAll()은 NodeList를 반환하고, 
NodeList는 images[0], images[1]처럼 인덱스로 접근 가능하고, images.length도 존재한다.
하지만 images.map()이나 images.filter() 같은 배열 메서드는 동작하지 않는다. 이게 바로 유사배열이다.

*유사배열을 진짜 배열로 만드는 방법
const realArray = Array.from(images);
->변환한 후엔 map(), filter(), indexOf() 같은 배열 메서드 사용이 가능
*/