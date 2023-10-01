$(document).ready(function() {

  //weather
  let now = new Date();
  let year = now.getFullYear(); //2023
  let month = now.getMonth();
  let day = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let dateString = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;

  $('.date').append(dateString);


  //open weather API Key
  const W_API_KEY = 'ceea8d8b2328a9fe92124a81e944bb8e'

  let weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
  };

  $.ajax({
    url:`http://api.openweathermap.org/data/2.5/weather?q=busan&APPID=${W_API_KEY}&units=metric`,
    dataType:'json', 
    type:'GET',
    success:function(data){
      console.log(data);
      // console.log(data.weather[0]);
      let $Icon = (data.weather[0].icon).substr(0,2);
      let $weather_description = data.weather[0].main;
      let $Temp = Math.floor(data.main.temp) + 'º';
      const $city = data.name;
      let $wind = '바람&nbsp;&nbsp;&nbsp;&nbsp;' +data.wind.speed + ' m/s';
      let $humidity = '습도&nbsp;&nbsp;&nbsp;&nbsp;' + data.main.humidity+ ' %';
      let $cloud = '구름&nbsp;&nbsp;&nbsp;&nbsp;' + data.clouds.all +"%";
      let $temp_min = Math.floor(data.main.temp_min) + 'º';
      let $temp_max = Math.floor(data.main.temp_max) + 'º';
      

      $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
      $('.CurrTemp').prepend($Temp);
      $('.weather_description').prepend($weather_description);
      $('.humidity').prepend($humidity);
      $('.wind').prepend($wind);
      $('.city').append($city);
      $('.cloud').append($cloud);
      $('.tempInfo').append(`${$temp_min}&nbsp;/&nbsp;${$temp_min}`);
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
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  //공지사항
  const swiper4 = new Swiper('.no-swiper', {
    slidesPerView: 1,
    // spaceBetween: auto,
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

  const bookmark = document.querySelector('.bookmark');
  bookmark.addEventListener('click', () => {
    console.log('click');
    this.setAttribute('fill', '#fff');
  });
});