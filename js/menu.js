$(document).ready(function(){

  $(window).resize(function(){
    let menuHeight = $(".menu_in").height();

    if(menuHeight < 500){
      $('.util').hide();
    }else{
      $('.util').show();
    }
  });

  $(".gnb .gnb_in").click(function(){
    $(this).find(".sub").stop().slideToggle("slow");
    $(this).siblings().find(".sub").stop().slideUp();
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
  });

  $(".menu").click(function(){
    $(".menu_in").css({zIndex:"1000"}).stop().animate({height:"100%",opacity:"1"},800);
    $(".dockbar").stop().fadeOut("fast");
    $(".util").stop().fadeIn(1500);
    $(".util").css({zIndex:"1000"});
  });
  $(".close").click(function(){
    $(".menu_in").stop().animate({height:"0%",opacity:"0"},800);
    $(".dockbar").stop().fadeIn(1400);
    $(".util").stop().fadeOut("fast");
  });
  

  $(".bottom_menu li").each(function(){
    let nowImg = $(this).find("img");
    let srcName = nowImg.attr("src");
    let newSrc = srcName.substring(0, srcName.lastIndexOf('.'));

    $(this).hover(function(){
      nowImg.attr('src', newSrc + '_hover.' + /[^.]+$/.exec(srcName));
    }, function(){
      nowImg.attr('src', newSrc + '.' + /[^.]+$/.exec(srcName));
    });
  });

});