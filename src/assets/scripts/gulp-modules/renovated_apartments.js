const list = document.querySelectorAll('.apartments-card');
const btn = document.querySelectorAll('[data-view]');
btn.forEach(el => el.addEventListener('click', (event) => {
  if (event.target.tagName != 'BUTTON') return false;
  const target = event.target.dataset.view;
  btn.forEach(button => {
    button.classList.remove('active');
  });
  el.classList.add('active');
  list.forEach((elem) => {
    elem.classList.add('active');
    if (!elem.classList.contains(target)) {
      elem.classList.remove('active');
    }
  });
}));

const swiper_apartments = new Swiper('.js-slider-2', {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: document.querySelector('[data-swiper-2-next]'),
    prevEl: document.querySelector('[data-swiper-2-prev]'),
  },
  pagination: {
    el: '.js-slider-2 .swiper-pagination',
    type: 'fraction',
  },
  lazy: true,
  speed: 400,
  watchSlidesVisibility: true,
});
