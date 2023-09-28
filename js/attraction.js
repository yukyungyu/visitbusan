$(document).ready(function() {

  /* 가을핫플 더보기 */
  chk1 = true;
  $('.more').click(function() {

    if(chk1){
      $(this).find("span").html("<i class='material-symbols-outlined'>expand_less</i>");
      $('.list_con').css({height:"auto"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='material-symbols-outlined'>expand_more</i>");
      $('.list_con').css({height:"470px"});
      chk1=true;
    };
  });


  /* 탭메뉴 */
  $(".tab_menu li").click(function(){

    $(this).siblings().removeClass("tab_active");
    $(this).addClass("tab_active");

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    $("#" + result).addClass("active");
  });

});