const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');
const totalNum = imageAll.length;
let scrollNum = 0;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;

  imageAll.forEach((item, index) => {
    //item.style.transform = `translateY(${scrollNum}px)`;
    //item.style.transform = `translateY(${scrollNum / 10}px)`;
    //item.style.transform = `translateY(${-scrollNum / (10*index)}px)`;

    //맨뒤에 있는게 제일 덜 움직이고 앞에 것이 많이 움직이게 해야 함
    item.style.transform = `translateY(${-scrollNum / (2 * (totalNum - index))}px)`;

    /* 
    imageAll[0].style.transform = `translateY(${-scrollNum / (2 * (totalNum - 0))}px)`; //-scrollNum/12
    imageAll[1].style.transform = `translateY(${-scrollNum / (2 * (totalNum - 1))}px)`; //-scrollNum/10
    imageAll[2].style.transform = `translateY(${-scrollNum / (2 * (totalNum - 2))}px)`;
    imageAll[3].style.transform = `translateY(${-scrollNum / (2 * (totalNum - 3))}px)`;
    imageAll[4].style.transform = `translateY(${-scrollNum / (2 * (totalNum - 4))}px)`;
    imageAll[5].style.transform = `translateY(${-scrollNum / (2 * (totalNum - 5))}px)`;
    */
  });
});