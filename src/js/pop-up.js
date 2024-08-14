$('.nav-header-action').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.choice-tea-arrange-btn').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.social-networks-btn').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$('.btn-order').click(function(e) {
    e.preventDefault();
    $('.popup-bg-order').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close').click(function() {
    $('.popup-bg-order').fadeOut(800);
});