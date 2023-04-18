//Поддержка Webp
import * as flsFunction from "./modules/functions.js";
import carousel from "./modules/carousel.js";


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    flsFunction.isWebp();
    carousel('.exclusive-swiper__row', '.exclusive-swiper__slide', '.button-nav', '.exclusive-swiper__button-prev', '.exclusive-swiper__button-next');
});



