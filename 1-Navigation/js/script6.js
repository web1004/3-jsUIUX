//DOMContentLoaded : load와 동일하지만 전체가 아닌 필요한 요소만 불러옴(속도 최적화)
window.addEventListener("DOMContentLoaded",()=>{

  let menu = document.querySelectorAll(".depth1");

  menu.forEach(function(el){
    el.addEventListener("mouseenter",show);
    el.addEventListener("focusin",show);
  });

  menu.forEach(function(el){
    el.addEventListener("mouseleave",hide);
    el.addEventListener("focusout",hide);
  });

  function show(){
    let target = this.children[1];
    target.style.maxHeight=target.scrollHeight+"px";
  };

  function hide(){
    let target=this.children[1]
    target.style.maxHeight=null;
  };
});