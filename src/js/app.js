import * as flsFunctions from "./modules/functions.js";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

flsFunctions.isWebp();


const gamersNum = document.querySelectorAll('.gamer').length



const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    // spaceBetween: 20,
    loop: true,
    speed: 500,
    breakpoints: {
      1000: {
        slidesPerView: 2,
      },
      1250: {
        slidesPerView: 3,
      },
    },
  });

  const swiper2 = new Swiper('.steps-slider', {
    slidesPerView: 1,
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    loop: true,
    speed: 500,
    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
  });

const $_gamersSliderNav = document.querySelector('.gamers__slide-nav');
const $_prevGamerBtn = $_gamersSliderNav.querySelector('.gamers__slider-prev');
const $_nextGamerBtn = $_gamersSliderNav.querySelector('.gamers__slider-next');
const $_currentGamer = $_gamersSliderNav.querySelector('.gamers__current-slide');

// swiper.activeIndex

// swiper.slides

$_currentGamer.textContent = swiper.realIndex+1;
$_gamersSliderNav.querySelector('.gamers__all-slides').textContent = gamersNum;

$_prevGamerBtn.addEventListener('click', () => {
    swiper.slidePrev();
    $_currentGamer.textContent = swiper.realIndex+1
})

$_nextGamerBtn.addEventListener('click', () => {
    swiper.slideNext();
    $_currentGamer.textContent = swiper.realIndex+1
})

setInterval(() => {
    swiper.slideNext();
    $_currentGamer.textContent = swiper.realIndex+1
}, 4000)

swiper.on('slideChange', function () {
    $_currentGamer.textContent = swiper.realIndex+1
});




