$(document).ready(function(){

  $(".tab_menu .all").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.all)").removeClass("tab_active");
    $(".contet_start hr").css("height","508%");
    $(".contet_start h3 span").text("22");
    $(".align .day").show();
    $(".align .two_day").show();

  });


  $(".tab_menu .day").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.day)").removeClass("tab_active");
    $(".contet_start hr").css("height","1115px");
    $(".contet_start h3 span").text("12");
    $(".align .day").show();
    $(".align .two_day").hide();

  });

  $(".tab_menu .two_day").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.two_day)").removeClass("tab_active");
    $(".contet_start hr").css("height","1355px");
    $(".contet_start h3 span").text("10");
    $(".align .day").hide();
    $(".align .two_day").show();

  });


});