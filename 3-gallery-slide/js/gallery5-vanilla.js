document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".gallery a");
  const overlay = document.querySelector(".lightbox-overlay");
  const modalImg = overlay.querySelector("img");
  const caption = overlay.querySelector("span");

  // 라이트박스 열기
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault(); // <a href="..."> 기본 이동 막기

      modalImg.src = a.getAttribute("href");          // 큰 이미지 경로
      caption.textContent = a.dataset.caption || "";  // data-caption 텍스트

      overlay.classList.add("active"); // 오버레이 보이기
    });
  });

  // 라이트박스 닫기(오버레이 아무데나 클릭)
  overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
  });
});
