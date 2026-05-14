document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab li");
  const panels = document.querySelectorAll(".tabContents > div");

  tabs.forEach((li, idx) => {
    li.addEventListener("click", () => {
      // 1) 모든 탭 아이콘을 기본(회색) 이미지로 되돌림: image/tab0.png ~ tab5.png
      tabs.forEach((t, i) => {
        const img = t.querySelector("img");
        if (img) img.src = `image/tab${i}.png`;
      });

      // 2) CSS에서 1번 탭에 붙어있던 active(배경이미지용) 해제
      // (원본 jQuery에서 $(".i1").removeClass("active") 하던 것과 동일) :contentReference[oaicite:4]{index=4}
      const first = document.querySelector(".tab li.i1");
      if (first) first.classList.remove("active");

      // 3) 지금 클릭한 탭만 활성(컬러) 이미지로 변경: image/tabon0.png ~ tabon5.png
      const img = li.querySelector("img");
      if (img) img.src = `image/tabon${idx}.png`;

      // 4) data-alt로 해당 콘텐츠만 active 부여
      const targetId = li.dataset.alt; // ex) "tab3" :contentReference[oaicite:5]{index=5}
      panels.forEach(p => p.classList.remove("active"));
      const target = document.getElementById(targetId);
      if (target) target.classList.add("active");
    });
  });
});
