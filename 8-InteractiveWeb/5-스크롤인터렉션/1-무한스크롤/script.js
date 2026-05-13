document.addEventListener("DOMContentLoaded", () => {
  const items = [...document.querySelectorAll(".port-list ul li")];
  if (!items.length) return;

  let i = 0;
  const step = 3;

  // 확실히 초기화(혹시 다른 코드 영향 방지)
  items.forEach(li => (li.style.display = "none"));

  const show = () => {
    items.slice(i, i + step).forEach(li => (li.style.display = "block"));
    i += step;
  };

  show(); // ✅ 처음 3개만

  const footer = document.querySelector("footer");
  if (!footer) return;

  const io = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    show();
    if (i >= items.length) io.disconnect();
  }, { rootMargin: "0px 0px -100px 0px" }); // footer 거의 닿을 때만

  io.observe(footer);
  
});
