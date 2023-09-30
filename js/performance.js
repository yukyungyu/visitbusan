$(document).ready(function(){


  $(".day1").click(function(){
    $(".event7").stop().fadeIn();
    $(".event").not(".event7").stop().fadeOut();
  });
  $(".day2").click(function(){
    $(".event6").stop().fadeIn();
    $(".event").not(".event6").stop().fadeOut();
  });
  $(".day3").click(function(){
    $(".event3, .event5").stop().fadeIn();
    $(".event").not(".event3, .event5").stop().fadeOut();
  });
  $(".day4").click(function(){
    $(".event4").stop().fadeIn();
    $(".event").not(".event4").stop().fadeOut();
  });
  $(".day5").click(function(){
    $(".event2").stop().fadeIn();
    $(".event").not(".event2").stop().fadeOut();
  });
  $(".day6").click(function(){
    $(".event1").stop().fadeIn();
    $(".event").not(".event1").stop().fadeOut();
  });
  $(".day7").click(function(){
    $(".event8").stop().fadeIn();
    $(".event").not(".event8").stop().fadeOut();
  });

  $(".all").click(function(){
    $(".event").stop().fadeIn();
  });

});