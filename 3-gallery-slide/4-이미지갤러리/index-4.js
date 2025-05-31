//(4)이전다음버튼튼

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
//(1)-1이 넘어가면 이전으로, 1이 넘어가면 다음으로로
prevBtn.addEventListener('click', () => {changeImage(-1)});
nextBtn.addEventListener('click', () => {changeImage(1)});


function openModalBox(e){

  if(e.target.tagName == 'IMG'){
    const clickedIndex = Array.from(images).indexOf(e.target);
    currentIndex = clickedIndex; 
    console.log(currentIndex);

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

//(2)
function changeImage(direction){
  //currentIndex = currentIndex + direction;
  currentIndex += direction;
  
  if(currentIndex >= totalImages){
    currentIndex = 0;
  }else if(currentIndex<0){
    currentIndex = totalImages-1;
  }
  updateModalBoxImage();
};