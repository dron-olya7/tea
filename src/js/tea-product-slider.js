$(document).ready(function () {
    let num = 0;

    $(".minus").click(function () {
        num = +$('.counter').val();
        num = num - 100;
        $('.counter').val(num);
    })

    $(".plus").click(function () {
        num = +$('.counter').val();
        num = num + 100;
        $(".counter").val(num);
    })

    $('.slider-tea').slick({
        arrows: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]          
    });

})

