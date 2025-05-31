//(3)큰이미지 경로가 들어오고 썸네일 이미지도 나오게 함

let currentIndex =  0;
const gallery = document.querySelector('.gallery'),
      modalBox = document.querySelector('#modalBox'),
      images = gallery.querySelectorAll('img'),  
      totalImages = images.length,
      closeBtn = document.querySelector('.close-btn'),
      prevBtn = document.querySelector('.prev-btn'),
      nextBtn = document.querySelector('.next-btn');


gallery.addEventListener('click', openModalBox); 
closeBtn.addEventListener('click', closeModalBox); 


function openModalBox(e){

  if(e.target.tagName == 'IMG'){
    const clickedIndex = Array.from(images).indexOf(e.target);
    currentIndex = clickedIndex; 
    console.log(currentIndex);

    updateModalBoxImage(); //(3)
    modalBox.style.display = 'flex';
  }
};

function closeModalBox(){
  modalBox.style.display = 'none';
};

//(1)
function updateModalBoxImage(){
  const modalboxImage = document.querySelector('.modalbox-img');
  const thumbnailWrap = document.querySelector('.thumbnail-wrap');

  //위에서 이미지를 클릭하면 index번호가 찍히고 있고, 그index 번호를 비어있는 src에 넣어주면 됨
  modalboxImage.src = images[currentIndex].src;
  //(3)문제:확인해보면 무조건 1번째 이미지만 보여주고 있음

  //(4)클릭을 할때마다 내용울 비우고 새롭게 넣어주기
  thumbnailWrap.innerHTML = '';

  images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image.src;
    thumbnail.alt = `Thumnail ${index+1}`;
    thumbnail.classList.add('thumbnail');
    thumbnail.addEventListener('click', () => updateMainImage(index));
    thumbnailWrap.appendChild(thumbnail);
  });

  const thumnails = document.querySelectorAll('.thumbnail');
  thumnails[currentIndex].classList.add('active-thumb');
}  

//(2)
updateModalBoxImage();

//(5)
function updateMainImage(index){
  currentIndex = index;
  updateModalBoxImage();
}