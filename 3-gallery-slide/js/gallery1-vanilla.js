const thumbs = document.querySelectorAll(".thumbs img");
const largeImg = document.querySelector("#largeImg img");

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove("active"));  //먼저 active가 있는건 다 삭제
    thumb.classList.add('active');  //클릭한것만 active 추가
    largeImg.src = thumb.src;
  });
});