const links = document.querySelectorAll(".navi-item li a");
const bannerImg = document.querySelector(".image-holder img");

links.forEach((a) => {
  a.addEventListener("mouseenter", () => {
    const swapSrc = a.dataset.src;       // data-src 값
    if (swapSrc) bannerImg.src = swapSrc; // 배경 이미지 교체
  });
});