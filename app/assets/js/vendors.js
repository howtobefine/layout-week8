var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$('.row').imagesLoaded().progress(function () {
    $('.row').masonry();
});