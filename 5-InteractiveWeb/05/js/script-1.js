let scrollNum = 0;

const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');
const totalNum = imageAll.length;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  //console.log(scrollNum);

  imageAll.forEach((item, index) => {
    //item.style.transform = `translateY(${scrollNum}px)`;
    item.style.transform = `translateY(${scrollNum / 10}px)`;
    item.style.transform = `translateY(${-scrollNum / (2 * (totalNum - index))}px)`;
    //item.style.transform = `translateY(${-scrollNum / (2 * (totalNum - index))}px)`;
  });
});