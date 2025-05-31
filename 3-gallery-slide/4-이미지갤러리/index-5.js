//(5)키보드이벤트 추가

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
prevBtn.addEventListener('click', () => {changeImage(-1)});
nextBtn.addEventListener('click', () => {changeImage(1)});


function openModalBox(e){

  if(e.target.tagName == 'IMG'){
    const clickedIndex = Array.from(images).indexOf(e.target);
    currentIndex = clickedIndex; 
    updateModalBoxImage(); 
    modalBox.style.display = 'flex';
  }
};

function closeModalBox(){
  modalBox.style.display = 'none';
};

function updateModalBoxImage(){
  const modalboxImage = document.querySelector('.modalbox-img');
  const thumbnailWrap = document.querySelector('.thumbnail-wrap');

  modalboxImage.src = images[currentIndex].src;
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
}; 
updateModalBoxImage();

function updateMainImage(index){
  currentIndex = index;
  updateModalBoxImage();
};

function changeImage(direction){
  currentIndex += direction;
  
  if(currentIndex >= totalImages){
    currentIndex = 0;
  }else if(currentIndex<0){
    currentIndex = totalImages-1;
  }
  updateModalBoxImage();
};

//추가
document.addEventListener('keydown', (e) => {
  if(modalBox.style.display === 'flex'){
    //console.log(e.key);
    if(e.key === 'ArrowLeft'){
      changeImage(-1);
    }else if(e.key === 'ArrowRight'){
      changeImage(1);
    };
  };
});