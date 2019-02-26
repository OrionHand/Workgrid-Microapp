$(function() {

    $('#total').show();
    $('.navegacion a:first').addClass('activo');

    $('.navegacion a').on('click', function() {

        $('.navegacion a').removeClass('activo');
        $(this).addClass('activo');

        $('.ocultar').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(500);

        return false;
    });

    $('#total2').show();
    $('.navegacion2 a:first').addClass('activo');

    $('.navegacion2 a').on('click', function() {

        $('.navegacion2 a').removeClass('activo');
        $(this).addClass('activo');

        $('.ocultar2').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(500);

        return false;
    });

    $('.ventana-hy-vee .customer a').on('click', function() {


        $('.hy-vee').slideToggle("slow");

    });



});

$(function() {

    $('#titulo a').on('click', function() {

        var enlace = $(this).attr('href');

        $(enlace).fadeIn(500);

    });

    $('.titulo a').on('click', function() {

        var enlace = $(this).attr('href');
        $(enlace).fadeOut(500);
    });



});