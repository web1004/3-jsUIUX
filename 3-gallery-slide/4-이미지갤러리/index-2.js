//(2)닫기버튼

let currentIndex =  0;
const gallery = document.querySelector('.gallery'),
      modalBox = document.querySelector('#modalBox'),
      images = gallery.querySelectorAll('img'),  
      totalImages = images.length,
      closeBtn = document.querySelector('.close-btn'),
      prevBtn = document.querySelector('.prev-btn'),
      nextBtn = document.querySelector('.next-btn');


gallery.addEventListener('click', openModalBox); 
closeBtn.addEventListener('click', closeModalBox); //(1)


function openModalBox(e){

  if(e.target.tagName == 'IMG'){
    const clickedIndex = Array.from(images).indexOf(e.target);
    currentIndex = clickedIndex; 
    console.log(currentIndex);

    modalBox.style.display = 'flex';
  }
};

//(2)
function closeModalBox(){
  modalBox.style.display = 'none';
};