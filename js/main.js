$(document).ready(function() {

  //weather
  let now = new Date();
  let year = now.getFullYear(); //2023
  let month = now.getMonth()+1;
  let day = now.getDate();
  let hours = now.getHours();
  if(hours < 10) {
    hours = '0'+hours;
  }
  let dateString = `${year}년 ${month}월 ${day}일 ${hours}시`;

  $('.date').append(dateString);


  //open weather API Key
  const W_API_KEY = 'ceea8d8b2328a9fe92124a81e944bb8e'

  function changeIcon(weather) {
    let weather_icon; 
    let weather_description;
    if (weather == 'Clear') {
      weather_icon = 'Sun';
      weather_description = '맑음';
    } else if (weather == 'Clouds') {
      weather_icon = 'Cloud';
      weather_description = '구름';
    } else if (weather == 'Rain') {
      weather_icon = 'Cloud mid rain';
      weather_description = '비';
    } else if (weather == 'Thunderstorm') {
      weather_icon = 'Cloud 3 zap';
      weather_description = '천둥번개';
    } else if (weather == 'Drizzle') {
      weather_icon = 'Cloud little rain';
      weather_description = '이슬비';
    } else if (weather == 'Snow') {
      weather_icon = 'Big snow little snow';
      weather_description = '눈';
    } else if (weather == 'Atmosphere') {
      weather_icon = 'Cloud';
      weather_description = '안개';
    }
    let $url = `images/main/weather/` + weather_icon + '.png';
    $('.CurrIcon').append('<img class="weather-icon" src="' + $url +'" alt="날씨아이콘">');
    $('.weather_description').prepend(weather_description);
  };

  $.ajax({
    url:`http://api.openweathermap.org/data/2.5/weather?q=busan&APPID=${W_API_KEY}&units=metric`,
    dataType:'json', 
    type:'GET',
    success:function(data){
      console.log(data);
      let weather_description = data.weather[0].main;
      changeIcon(weather_description);

      let $Icon = (data.weather[0].icon).substr(0,2);
      let $Temp = Math.floor(data.main.temp) + 'º';
      const $city = data.name;
      let $wind = data.wind.speed + ' m/s';
      let $humidity = data.main.humidity+ ' %';
      let $cloud = data.clouds.all +"%";

      $('.CurrTemp').prepend($Temp);
      $('.humidity').append($humidity);
      $('.wind').append($wind);
      $('.cloud').append($cloud);
    }
  });

  /* swiper.min.js */
  //메인비주얼
  const swiper1 = new Swiper('.main-swiper', {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    // paginationClickable: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })


  //축제&이벤트
  const swiper2 = new Swiper('.fes-swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    // loop: true
  });

  //추천코스
  const swiper3 = new Swiper('.re-swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  //공지사항
  const swiper4 = new Swiper('.no-swiper', {
    slidesPerView: 1,
    direction: "vertical",
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: ".slideNext-btn",
      prevEl: ".slidePrev-btn",
    },
  })

  $('.bookmark').click(function() {
    $(this).toggleClass('active');
  });
});