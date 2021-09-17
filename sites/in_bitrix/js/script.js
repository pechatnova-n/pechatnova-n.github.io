$(document).ready(function(){


    $('.form_block .item input[type="text"], textarea').on('focusin', function(){
        if (!$(this).parents(".item").hasClass('active')) {
            $(this).parents(".item").toggleClass('active');
        }
    });

    $('.form_block .item input[type="text"], textarea').on('focusout', function(){
        if (!$.trim($(this).val())) {
            $(this).parents(".item").toggleClass('active');
        }
    });


    //menu 320px
    $('.menu a.main').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
    });

    $('.menu a.close').on('click', function(e){
        e.preventDefault();
        $(this).parents().removeClass('active');
    });



        //slider-jquery
    $( " #slider" ).slider({
        min: 1,
        max: 30,
        step: 1,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
        }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) );

});
