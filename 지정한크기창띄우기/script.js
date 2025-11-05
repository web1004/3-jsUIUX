$(function(){

  $(".btns2 button, .btns3 button").click(function(){
    $(this).next().show(); 
    $("html").css({overflowY:"hidden"});
  });

  $(".close").click(function(){
    $(".pop").hide(); 
    $("html").css({"overflow-y":"scroll"});
  });

});