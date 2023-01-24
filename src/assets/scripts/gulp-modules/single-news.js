const swiper_news = new Swiper('.js-slider', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: document.querySelector('[data-swiper-next]'),
    prevEl: document.querySelector('[data-swiper-prev]'),
  },
  pagination: {
    el: '.js-slider .swiper-pagination',
    type: 'fraction',
  },
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
});
