$(document).ready(function(){

  $(".tab_menu .all").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.all)").removeClass("tab_active");
    $(".contet_start hr").css("height","508%");
    $(".contet_start h3 span").text("20");
    $(".align .day").show();
    $(".align .two_day").show();
    $(".align .three_day").show();
    $(".align .four_day").show();

  });


  $(".tab_menu .day").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.day)").removeClass("tab_active");
    $(".contet_start hr").css("height","1115px");
    $(".contet_start h3 span").text("6");
    $(".align .day").show();
    $(".align .two_day").hide();
    $(".align .three_day").hide();
    $(".align .four_day").hide();

  });

  $(".tab_menu .two_day").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.two_day)").removeClass("tab_active");
    $(".contet_start hr").css("height","1355px");
    $(".contet_start h3 span").text("7");
    $(".align .day").hide();
    $(".align .two_day").show();
    $(".align .three_day").hide();
    $(".align .four_day").hide();

  });

  $(".tab_menu .three_day").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.three_day)").removeClass("tab_active");
    $(".contet_start hr").css("height","1115px");
    $(".contet_start h3 span").text("6");
    $(".align .day").hide();
    $(".align .two_day").hide();
    $(".align .three_day").show();
    $(".align .four_day").hide();

  });
  
  $(".tab_menu .four_day").click(function(){

    $(this).addClass("tab_active");
    $(".tab_menu li:not(.four_day)").removeClass("tab_active");
    $(".contet_start hr").css("height","0px");
    $(".contet_start h3 span").text("1");
    $(".align .day").hide();
    $(".align .two_day").hide();
    $(".align .three_day").hide();
    $(".align .four_day").show();

  });


});