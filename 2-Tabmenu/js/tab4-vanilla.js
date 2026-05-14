document.addEventListener("DOMContentLoaded", () => {
  const dts = document.querySelectorAll("dl dt");
  const dds = document.querySelectorAll("dl dd");
  const imageEl = document.querySelector(".image img");
  const textEl = document.querySelector(".text p");

  // dd 전부 닫기
  const closeAll = () => dds.forEach(dd => (dd.style.display = "none"));

  dts.forEach((dt) => {
    dt.addEventListener("click", () => {
      // 1) 탭 selected 처리
      dts.forEach((x) => x.classList.remove("selected"));
      dt.classList.add("selected");

      // 2) 내용(dd) 전환 (dt 바로 다음 dd만 열기)
      closeAll();
      const dd = dt.nextElementSibling;
      if (dd && dd.tagName === "DD") dd.style.display = "block";

      // 3) 이미지 변경 + 자연스럽게 나타나기(간단 페이드)
      const src = dt.dataset.background;
      if (src && imageEl) {
        imageEl.style.opacity = "0";
        imageEl.src = src;
        imageEl.onload = () => (imageEl.style.opacity = "1");
      }

      // 4) 텍스트 변경
      const t = dt.dataset.text;
      if (textEl) textEl.textContent = t || "";
    });
  });

  // 첫 화면 페이드가 필요하면 초기 opacity 세팅
  if (imageEl) imageEl.style.transition = "opacity 0.4s ease";
});
