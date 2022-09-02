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