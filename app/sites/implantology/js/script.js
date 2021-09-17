$(document).ready(function(){

    //sliders
    $('.slider_block .slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: 'ease-in-out'
    });


    $('.right .block').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 740,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.series .block').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false,
                    vertical: false
                }
            },

            {
                breakpoint: 740,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    vertical: false
                }
            }
        ]
    });

    $('.other_videos .bottom_slider').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 740,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    });



    //search
    $('.search a.search').on('click', function(e){
        e.preventDefault();
        $(this).parents().addClass('active');
    });

    $('.search a.close').on('click', function(e){
        e.preventDefault();
        $(this).parents().removeClass('active');
    });



    //menu
    $('.in_menu a.main').on('click', function(e){
        e.preventDefault();
        $(this).parents('.menu').addClass('active');
    });

    $('.in_menu a.close_menu').on('click', function(e){
        e.preventDefault();
        $(this).parents('.menu').removeClass('active');
    });






    //logo-block slider less740

    if($(window).width() < 740){
        $(".logo_block .inn_logo").slick({
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true
        });
    }

});



