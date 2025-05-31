window.addEventListener("DOMContentLoaded",()=>{

  let menu = document.querySelectorAll(".depth1");

  menu.forEach(function(el){
    el.addEventListener("mouseenter",show)
    el.addEventListener("focusin",show)
  });

  menu.forEach(function(el){
    el.addEventListener("mouseleave",hide)
    el.addEventListener("focusout",hide)
  });

  function show(){
    let target = this.children[1]
    console.log(target);
    target.style.maxHeight=target.scrollHeight+"px";
  };

  function hide(){
    let target=this.children[1]
    target.style.maxHeight=null
  };  
  
});

