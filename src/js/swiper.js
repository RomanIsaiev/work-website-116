import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
