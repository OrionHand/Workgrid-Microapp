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

    $('#total3').show();
    $('.navegacion3 a:first').addClass('activo');

    $('.navegacion3 a').on('click', function() {

        $('.navegacion3 a').removeClass('activo');
        $(this).addClass('activo');

        $('.ocultar3').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(500);

        return false;
    });

    $('#total4').show();
    $('.navegacion4 a:first').addClass('activo');

    $('.navegacion4 a').on('click', function() {

        $('.navegacion4 a').removeClass('activo');
        $(this).addClass('activo');

        $('.ocultar4').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(500);

        return false;
    });

    $('.ventana-hy-vee .customer a').on('click', function() {


        $('.hy-vee').slideToggle("slow");

    });

    $('.kroger').slideUp();
    $('.ventana-kroger .customer a').on('click', function() {


        $('.kroger').slideToggle("slow");

    });

    $('.shopko').slideUp();
    $('.ventana-shopko .customer a').on('click', function() {


        $('.shopko').slideToggle("slow");

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