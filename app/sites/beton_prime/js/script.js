$(document).ready(function(){

    //header_scroll
    $(window).scroll(function(){
        if ($(document).scrollTop() > 5) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });

    //menu_open
    $('.menu a.main').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active');

        $('.menu a.close').on('click', function(e){
            e.preventDefault();
            $(this).parent().removeClass("active");
        });
    });


    $('.tab .cost a').hover(
        function() {
            $(this).parents('.cost').addClass('active');
        },
        function() {
            $(this).parents('.cost').removeClass('active');
        }
    );


    $('.price_block .top_block').on('click', function(){
        $(this).parent().toggleClass('active').children('.bottom_block').slideToggle();
        $('.price_block .bottom_block a').on('click', function(e){
            e.preventDefault();
            $(this).parents('.item').removeClass('active').children('.bottom_block').slideUp();
        });
    });


    $('.price_block .links a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');
        $('.price_block .sub_block').removeClass('active');
        $(attr).addClass('active');
    });



    $('.choose .contriols a').on('click', function(e){
        e.preventDefault();
        $(this).parent().children().removeClass('active');
        $(this).addClass('active');
        var attr = $(this).attr('href');
        $('.choose .tabs .tab').removeClass('active');
        $(attr).addClass('active');
    });

    //tabs/accordion
    if($(window).width() < 981){
        $('.cond_pay a.show_320').on('click', function(e){
            e.preventDefault();
            $(this).parent().toggleClass('active_320');
            $(this).parent().children('.inner').slideToggle();
        });
    }else{
        $('.cond_pay .contr a').on('click', function(e){
            e.preventDefault();
            $(this).parent().children().removeClass('active');
            $(this).addClass('active');
            var attr = $(this).attr('href');
            $('.cond_pay .block .conditions').removeClass('active');
            $(attr).addClass('active');
        });
    }


    $('.prod .selectpicker').selectpicker({
        
    });


    $('.calculator .selectpicker').selectpicker({

    });


    //slider
    $(" #slider").slider({
        range: false,
        min: 0,
        max: 300,
        step: 1,
        value: 18,
        create: function(event, ui) {
            $("input#cost").val($("#slider").slider("values",0));
        },

        stop: function(event, ui){
            $("input#cost").val($("#slider").slider("values",1));
        }
    });
    $("#cost").change(function(){
        var val_pols = $("#cost").val();
        $('#slider').slider("option", "value", val_pols);
    });
    $('input[type="submit"]').on('click', function(e){
        e.preventDefault();
    });

    //mask
    var mask = '#phone_2, input.phone, #oder input[type="text"]';
    $(mask).mask("+7 (999) 999-99-99");
    $(document).on('focus', mask, function(){
        var phone=$(mask).val();
        if(phone=='+7 ('){
            phone.selectionStart = 4;
        }else{
            $(mask).val('+7 (');
        }
    });





});
