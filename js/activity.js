const swipeC = document.querySelector('.swiper-container');
const swipeW = document.querySelector('.swiper-wrapper');
const pagenation = document.querySelector('.swiper-pagination');

let swipeCount = 1;

makeSlides();

const swipeS = document.querySelectorAll('.swiper-slide');

let swipeWidth = swipeC.clientWidth * 0.8 + 20;

let startPoint = 0;
let endPoint = 0;

window.addEventListener('resize', ()=>{
    swipeWidth = swipeC.clientWidth * 0.8 + 20;
});

swipeC.addEventListener('mousedown', (e)=>{
    startPoint = e.pageX;
});
swipeC.addEventListener('mouseup', (e)=>{
    endPoint = e.pageX;
    if(startPoint < endPoint){
        prevSwipe();
    } else if (startPoint > endPoint){
        nextSwipe();
    }
});

swipeC.addEventListener('touchstart', (e)=>{
    startPoint = e.touches[0].pageX;
});
swipeC.addEventListener('touchend', (e)=>{
    endPoint = e.changedTouches[0].pageX;
    if(startPoint < endPoint){
        prevSwipe();
    } else if (startPoint > endPoint){
        nextSwipe();
    }
});

function nextSwipe(){
    swipeCount++;
    console.log(swipeCount)
    if(swipeCount < 20){
        const offset = swipeWidth * (swipeCount - 1);
        swipeS.forEach((i)=>{
            i.setAttribute('style', `left:`+(-offset)+`px`);
        });
    } else {swipeCount--;}
    pagenation.innerHTML = `(`+swipeCount+` / 19)`;
}
function prevSwipe(){
    swipeCount--;
    if(swipeCount > 0){
        const offset = swipeWidth * (swipeCount - 1);
        swipeS.forEach((i)=>{
            i.setAttribute('style', `left:`+(-offset)+`px`);
        });
    } else {swipeCount++;}
    pagenation.innerHTML = `(`+swipeCount+` / 19)`;
}

function makeSlides(){
    for(var i=0; i<19; i++){
        const div = document.createElement('div');
        div.className += 'swiper-slide';
        div.innerHTML += `<img class='img' src="./images/activity/sub3-`+(i+1)+`.jpg" alt="">`
        swipeW.appendChild(div);
    }
    pagenation.innerHTML += `(`+swipeCount+` / 19)`;
}