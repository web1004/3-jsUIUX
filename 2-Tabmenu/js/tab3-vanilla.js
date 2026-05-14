document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".title");
  const imageEl = document.querySelector(".image img");

  titles.forEach((title) => {
    title.addEventListener("click", () => {
      const desc = title.nextElementSibling; // 바로 아래 .desc
      const isOpen = title.classList.contains("active");

      // 전부 닫기
      titles.forEach((t) => {
        t.classList.remove("active");
        const d = t.nextElementSibling;
        if (d && d.classList.contains("desc")) d.classList.remove("active");
        //d가 존재하는지 확인 ->정말 desc가 맞을 때만 처리
      });

      // 클릭한 게 닫혀있던 상태면 열기
      if (!isOpen) {
        title.classList.add("active");
        if (desc && desc.classList.contains("desc")) desc.classList.add("active");

        // 이미지 변경
        const src = title.dataset.image; // data-image
        //if (src && imageEl) imageEl.src = src;
        //“이 타이틀에 연결된 이미지가 정말 있나?” 를 확인하는 안전장치

        //기존 이미지 서서히 사라짐 -> 이미지 교체 -> 새 이미지 서서히 나타남
        if (src && imageEl) {  //이미지 경로도 있고, 이미지 DOM도 있을 때만 실행
          imageEl.classList.add("fade-out");

          //이미지가 완전히 사라진 뒤에 src를 바꿔야 자연스럽기 때문
          setTimeout(() => {
            imageEl.src = src;
            imageEl.classList.remove("fade-out");
          }, 300); // CSS transition 시간과 동일
        }
      }
    });
  });
});

