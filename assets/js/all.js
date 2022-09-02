"use strict";

$('.back').click(function (e) {
  e.preventDefault();
  $('#navbarSearch').toggleClass('show');
  $('.navbar-icon').removeClass('d-none');
  $('.navbar-icon').addClass('d-block');
  $('.logo').show();
});
$('.search').click(function (e) {
  e.preventDefault();
  $('.navbar-icon').toggleClass('d-none');
  $('.logo').hide();
});
$('.btn-plus').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
});
"use strict";

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiperOthers = new Swiper('.swiperOthers', {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  autoplay: true,
  breakpoints: {
    992: {
      slidesPerView: 4
    }
  },
  pagination: {
    el: '.swiperOthers-pagination',
    clickable: true
  }
});
$('.row-masonry').imagesLoaded().progress(function () {
  $('.row-masonry').masonry();
});
//# sourceMappingURL=all.js.map
