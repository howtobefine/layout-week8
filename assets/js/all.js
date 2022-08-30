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
"use strict";

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
$('.row').imagesLoaded().progress(function () {
  $('.row').masonry();
});
//# sourceMappingURL=all.js.map
