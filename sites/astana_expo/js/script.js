$(document).ready(function(){

    $('.programma .slider_block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });

    $('.news_block .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.inner_content .partn_block').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1471,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                }
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }

        ]
    });

    $('.fotogallary .slide_block').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1471,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                     dots: false,
                     arrows: false
                }
            },
            {
                breakpoint: 755,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }

        ]
    });


    if($(window).width() < 1469){
       $('.logo_block .in_logo_block').slick({
           infinite: true,
           slidesToShow: 1,
           slidesToScroll: 1,
           dots: true,
           arrows: false,
           responsive: [
               {
                   breakpoint: 1000,
                   settings: {
                       slidesToShow: 2,
                       slidesToScroll: 1,
                       dots: false
                   }
               },
               {
                   breakpoint: 755,
                   settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                       dots: false
                   }
               }

           ]
       });
   }
    $( window ).resize(function() {
        $('.logo_block .in_logo_block').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        dots: false
                    }
                },
                {
                    breakpoint: 755,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false
                    }
                }

            ]
        });
    });




    $('.sidebar .logo_block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    $('.program_page .in_sub_block').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });

    $('.similar_video .similar_block').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });

    $('.all_vid_right .block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        vertical: true
    });



    $( window ).resize(function() {
        $('.program_page .in_sub_block').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true
        });
    });

    (function($){
        $(window).on("load",function(){
            $(".programma .content").mCustomScrollbar();
        });
    })(jQuery);

    (function($){
        $(window).on("load",function(){
            $(".program_page .block").mCustomScrollbar();
        });
    })(jQuery);

    $(document).ready(function() {
        $(".fancybox-thumb").fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            padding: [25, 25, 55, 25],

        helpers	: {
                title	: {
                    type: 'inside'
                },
                thumbs	: {
                    width	: 112,
                    height	: 78
                }
            }
        });
    });


    $(" #entrance").on('click', function(e){
        e.preventDefault();
        $(' #opacity_layer').addClass('active');
        $(' #enter_block').addClass('active');
    });
    $('.enter_block a.close_enter_block').on('click', function(e){
        e.preventDefault();
        $(' #opacity_layer').removeClass('active');
        $(' #enter_block').removeClass('active');
    });


    $(" #registration").on('click', function(e){
        e.preventDefault();
        $(' #opacity_layer').addClass('active');
        $(' #registration_block').addClass('active');
    });
    $('.registration_block a.close_registration_block').on('click', function(e){
        e.preventDefault();
        $('#opacity_layer').removeClass('active');
        $('#registration_block').removeClass('active');
    });


    $('.articles a.more').on('click', function(e){
        e.preventDefault();
        $(this).parents('.articles').addClass('active');
    });


    $('.nav_locat a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        var attr = $(this).addClass('active').attr('href');

        $('.location .tab_locat').removeClass('active');
        $(attr).addClass('active');
    });


    $('.time .selectpicker').selectpicker({

    });

    $('#applic').on('click', function(e){
        e.preventDefault();
        $('#applic').parent().removeClass('active');
        $('.record_video_page .submit_applic').addClass('active');
    });

    $('.submit_applic .close_block a').on('click', function(e){
        e.preventDefault();
        $('#applic').parent().addClass('active');
        $('.record_video_page .submit_applic').removeClass('active');
    });

    $('.lang_mob .selectpicker').selectpicker({

    });

    $('.menu_mob a.main').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
    });

    $('.menu_mob .close_mob_menu a').on('click', function(e){
        e.preventDefault();
        $('header .menu_mob').removeClass('active');
    });

    $('.menu_mob .opacity_layer').on('click', function(){
        $(' header .menu_mob').removeClass('active');
    });



});
