$(document).on("click", ".go-to-top", function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 800);
});