let horizontalBar = document.querySelector(".horizontal-underline");
let horizontalMenus = document.querySelectorAll("nav:first-child a");
let verticalBar = document.querySelector(".vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

horizontalMenus.forEach((menu) => menu.addEventListener("click", (e) =>horizontalIndicator(e)));
verticalMenus.forEach((menu) =>menu.addEventListener("click", (e) => verticalIndicator(e)));

function horizontalIndicator(e) {
  horizontalBar.style.left = e.currentTarget.offsetLeft + 'px';
  horizontalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight +'px';
  horizontalBar.style.width = e.currentTarget.offsetWidth + "px";
};

function verticalIndicator(e) {
  verticalBar.style.left = e.currentTarget.offsetLeft + "px";
  verticalBar.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
  verticalBar.style.width = e.currentTarget.offsetWidth + "px";
}