$(document).ready(function() {


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

  // const H_API_KEY = 'hQwtB9VEBeMV%2F5iReEPB0AyMgOs2b7tGUsJjFKFXTeNOOI50LzewXCPIxg8kWyej2sLwtY6q%2FpWfekf9cm%2B6hA%3D%3D';

  // $.ajax({
  //   crossOrigin: true,
  //   url: `http://apis.data.go.kr/1360000/BeachInfoservice/getUltraSrtFcstBeach?&beachNum=1&base_date=20220622&base_time=1230`,
  //   dataType: 'json',
  //   contentType: "application/json; charset=utf-8",
  //   type: 'POST',
  //   data: {
  //     serviceKey: H_API_KEY,
  //   },
  //   xhrFields: { 
  //   	withCredentials: true // 클라이언트와 서버가 통신할때 쿠키와 같은 인증 정보 값을 공유하겠다는 설정
  //   },
  //   success:function(response, request) {
  //     console.log(response);
  //     console.log(request);
  //     //let res = JSON.parese(response);
  //     //console.log(res);
  //   },
  //   error:function(request, status, error){
  //     alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
  //   }
  // })
  
});