const swiper = new Swiper('.swiper-news', {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: false,
  navigation: {
    nextEl: document.querySelector('[data-next]'),
    prevEl: document.querySelector('[data-prev]'),
  },
  breakpoints: {
    1024: {
      slidesPerView: 3.3
    },
    575: {
      slidesPerView: 2.3
    }
  }
});
