$(document).ready(function(){
   //flipped menu
    $(window).scroll(function(){
        if ($(document).scrollTop() > 5) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });
    //end flipped menu




    //open form
    $('.become_customer a').on('click', function(e){
        e.preventDefault();
        $(this).parents().toggleClass('active');
    });
    $('.block_become_customer input[type="text"]').on('focusin', function(){
        if (!$(this).parents(".item").hasClass('active')) {
            $(this).parents(".item").toggleClass('active');
        }
    });
    $('.block_become_customer input[type="text"]').on('focusout', function(){
        if (!$.trim($(this).val())) {
            $(this).parents(".item").toggleClass('active');
        }
    });
    //end open form




    //close form
    $('.block_become_customer a.close_block').on('click', function(e){
        e.preventDefault();
        $('header .inner').removeClass('active');
    });
    //end close form




    //mask for phone
    var mask = '#mob_phone';
    $(mask).mask("+7 (999) 999-99-99");
    $(document).on('focus', mask, function(){
        var phone=$(mask).val();
        if(phone=='+7 ('){
            phone.selectionStart = 4;
        }else{
            $(mask).val('+7 (');
        }
    });

    $('.services_block .img').on('click', function(){
       $(this).addClass('.scale_img');
    });
    //end mask for phone





   /* //scale bg-top-block
    function top_block(){
        $('#top_block').addClass('active');
    }
    setTimeout(top_block, 0);
   */










        //увеличение мужика при скролле
         $(window).scroll(function(){
             if ( $(document).scrollTop()>1){
                 $('#top_block').addClass('active');
             }
         });








/*
    var left = 0,
    top = 0;
    $("#top_block").scrollTop(function () {
        left = $(document).scrollLeft();
        top = $(document).scrollTop();
        $(document.body).css({
                overflow: "hidden"
    });

    function stop_scroll(event) {
        event.preventDefault();
        $(document).scrollLeft(left);
        $(document).scrollTop(top);
    }
    $(document).bind("mousewheel", stop_scroll);
    $(window).bind("scroll mousewheel", stop_scroll);
    });




    $("#top_block").scrollTop(function () {
    $(document).unbind('mousewheel');
    $(window).unbind("scroll mousewheel");
    $(document.body).css({
            overflow: ""
        });
    });*/








    //mouse move in scroll_block
    function scroll(){
        $('#scroll').toggleClass('active');
    }
    setInterval(scroll, 800);
    //end mouse move in scroll_block




    //full-page
   $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false
    });

    $(window).resize(function(){
        if($('#fullpage').hasClass('fullpage-wrapper')) {
            $.fn.fullpage.destroy('all');
        }else{
            if(!$('#fullpage').hasClass('fullpage-wrapper') || $('#fullpage').hasClass('fp-destroyed')) {
                $('#fullpage').fullpage({
                    autoScrolling: false,
                    fitToSection: false
                });
            }
        }
    });
    //end full-page




    //tab vip_airoport
    $('.vip_airoport .controls a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');


        $('.vip_airoport .tab_vip').removeClass('active');
        $(attr).addClass('active');
    });


    //tab vip_serv
    $('.vip_serv .controls a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');


        $('.vip_serv .tab_vip').removeClass('active');
        $(attr).addClass('active');
    });


    //tab roadside_assistance
    $('.roadside_assistance .controls a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');


        $('.roadside_assistance .tab_vip').removeClass('active');
        $(attr).addClass('active');
    });


    //tab investments
    $('.investments .controls a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');


        $('.investments .tab_vip').removeClass('active');
        $(attr).addClass('active');
    });


    //open block territory
    $('.input_block input').on('click', function(){
        $('.territory .sity_block').addClass('active');
        $('.input_block a.close_block').addClass('active');
    });
    $('.territory .title a').on('click', function(e){
        e.preventDefault();
        $('.territory .sity_block').addClass('active');
        $('.input_block a.close_block').addClass('active');
    });

    //close block territory
    $('.input_block a.close_block').on('click', function(e){
        e.preventDefault();
       $('.territory .sity_block').removeClass('active');
        $('.input_block a.close_block').removeClass('active');
    });







    $(window).on("load",function(){
        $(".mCustomScrollbar .scroll").mCustomScrollbar({
            axis:"x",
            theme:"light-3",
            advanced:{autoExpandHorizontalScroll: true}
        });
    });



});






