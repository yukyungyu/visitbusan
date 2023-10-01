$(document).ready(function () {

  /* 블루리본서베이 */
  const swiper = new Swiper('.blue_slide', {
    scrollbar: '.slide_bar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true
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