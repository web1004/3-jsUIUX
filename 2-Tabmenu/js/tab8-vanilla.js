document.addEventListener("DOMContentLoaded", () => {
  const tabItems = document.querySelectorAll(".tab li");
  const panels = document.querySelectorAll(".panel > li");

  // ---- 1) 탭 메뉴 ----
  tabItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      // 탭 active 토글
      tabItems.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // 패널 active 토글 + fadeIn(간단 버전)
      const targetId = tab.dataset.alt; // data-alt="tab1" :contentReference[oaicite:3]{index=3}
      panels.forEach(p => p.classList.remove("active"));

      const target = document.getElementById(targetId);
      if (target) {
        target.classList.add("active");

        // jQuery hide().fadeIn() 대체(아주 간단하게)
        target.style.opacity = "0";
        target.style.transition = "opacity 0.35s ease";
        requestAnimationFrame(() => (target.style.opacity = "1"));

      }
    });
  });

  // ---- 2) 갤러리(3개 공통 로직) ----
  document.querySelectorAll(".gallery").forEach((gallery) => {
    const bigLis = gallery.querySelectorAll(".largeImg li");
    const thumbs = gallery.querySelectorAll(".thumbs li");

    let oldIndex = 0;

    // 첫 썸네일이 기본 활성처럼 보이게(opacity)
    thumbs.forEach((li, i) => (li.style.opacity = i === 0 ? "1" : "0.6"));

    thumbs.forEach((thumbLi, newIndex) => {
      thumbLi.addEventListener("click", (e) => {
        e.preventDefault(); // a href="#none" 클릭 방지 :contentReference[oaicite:4]{index=4}

        // 썸네일 강조(opacity)
        thumbs.forEach((t, i) => (t.style.opacity = i === newIndex ? "1" : "0.6"));

        // 큰 이미지 전환(fade)
        fadeOut(bigLis[oldIndex], 350);
        fadeIn(bigLis[newIndex], 350);

        oldIndex = newIndex;
      });
    });
  });

  // ---- fade 유틸(간단) ----
  function fadeIn(el, ms = 350) {
    if (!el) return;
    el.style.display = "block";
    el.style.opacity = "0";
    el.style.transition = `opacity ${ms}ms ease`;
    requestAnimationFrame(() => (el.style.opacity = "1"));
  }

  function fadeOut(el, ms = 350) {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transition = `opacity ${ms}ms ease`;
    setTimeout(() => {
      el.style.display = "none";
    }, ms);
  }

});
