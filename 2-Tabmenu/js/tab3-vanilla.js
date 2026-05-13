const titles = document.querySelectorAll(".title");
const imageEl = document.querySelector(".image img");

titles.forEach((title) => {
  title.addEventListener('click', () => {
    const desc = title.nextElementSibling; // 바로 아래 .desc
    const isOpen = title.classList.contains("active");

    //전부 닫기
    titles.forEach((t) => {
      t.classList.remove("active");
      const d = t.nextElementSibling;
      d.classList.remove("active");
    });

    //클릭한게 닫혀있던 상태면 열기
    if (!isOpen) {
      title.classList.add("active");
      desc.classList.add("active");

      // 이미지 변경
      const src = title.dataset.image; //data-image

      //기존 이미지 서서히 사라짐 -> 이미지 교체 -> 새 이미지 서서히 나타남
      if (src && imageEl) {  //이미지 경로도 있고, 이미지 DOM도 있을 때만 실행
        imageEl.classList.add("fade-out");

        //이미지가 완전히 사라진 뒤에 src를 바꿔야 자연스럽기 때문
        setTimeout(() => {
          imageEl.src = src;
          imageEl.classList.remove("fade-out");
        }, 300); // CSS transition 시간과 동일
      };
    };
  });
});