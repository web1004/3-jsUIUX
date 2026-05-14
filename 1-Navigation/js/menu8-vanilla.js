$(document).ready(function(){

  $(".navi li").mouseenter(function(){
    let changeImage = $(this).attr("data-image");
    //$(".photo").css({"background-image":"url("+ changeImage + ")"});
    $(".photo").css({"background-image":`url(${changeImage})`});
  });

  $(".navi li").mouseleave(function(){
    $(".photo").css({"background-image": ""});
  });

});