const images = document.querySelectorAll('.main--banner__container__slider .main--banner__container__slider-line img');
const mainSliderLine = document.querySelector('.main--banner__container__slider-line');
const divs = document.querySelectorAll('.news--container__slider .news--container__slider-line .slider-line-elem');
const newsSliderLine = document.querySelector('.news--container__slider-line');
const bannerImages = document.querySelectorAll('.banner__container__slider .banner__container__slider-line img');
const bannerSliderLine = document.querySelector('.banner__container__slider-line');
let count = 0;
let width;
let mainCount = 0;
let mainWidth;
let bannerCount = 0;
let bannerWidth;


function initial(){
    mainWidth = document.querySelector('.main--banner__container__slider').offsetWidth;
    btnWidth = document.querySelector('.main--banner__container__slider .main--banner__container__slider-line .main__text').offsetWidth;
    mainSliderLine.style.mainWidth = mainWidth*images.length + 'px';
    images.forEach( item =>{
        item.style.mainWidth = mainWidth + 'px';
        item.style.height = 'auto';
    })
    mainRollSlider();
}

window.addEventListener('resize', initial);
initial();
document.querySelector('.main__slider-prev').addEventListener('click', function(){
    mainCount--;
    if (mainCount < 0){
        mainCount = images.length - 1;
    }
    let btn = document.createElement('button');
    mainRollSlider();
});

document.querySelector('.main__slider-next').addEventListener('click', function(){
    mainCount++;
    if (mainCount >= images.length){
        mainCount = 0;
    }
    mainRollSlider();
});

function mainRollSlider(){
    mainSliderLine.style.transform = 'translate(-'+mainCount*mainWidth+'px)';
}


function init(){
    console.log('resize');
    width = document.querySelector('.news--container__slider').offsetWidth;
    newsSliderLine.style.width = width*divs.length + 'px';
    divs.forEach( item =>{
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSlider();
}


window.addEventListener('resize', init);
init();
document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if (count < 0){
        count = divs.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count >= divs.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    newsSliderLine.style.transform = 'translate(-'+count*width+'px)';
}





function initialic(){
    bannerWidth = document.querySelector('.banner__container__slider-line').offsetWidth;
    bannerSliderLine.style.bannerWidth = bannerWidth*bannerImages.length + 'px';  
    bannerImages.forEach( item =>{
        item.style.bannerWidth = bannerWidth + 'px';
        item.style.height = 'auto';
    })
    bannerRollSlider();
}


window.addEventListener('resize', initialic);
initialic();
document.querySelector('.prev').addEventListener('click', function(){
    bannerCount--;
    if (bannerCount < 0){
        bannerCount = bannerImages.length - 1;
    }
    bannerRollSlider();
});

document.querySelector('.next').addEventListener('click', function(){
    bannerCount++;
    if (bannerCount >= bannerImages.length){
        bannerCount = 0;
    }
    bannerRollSlider();
});

function bannerRollSlider(){
    bannerSliderLine.style.transform = 'translate(-'+bannerCount*bannerWidth+'px)';
}

$('.menu-btn').on('click', function(e){
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
    $('.page--content').toggleClass('page--content_active');
    $('.page--cont').toggleClass('page--cont_active');
    $('.footer').toggleClass('footer_active');
})

