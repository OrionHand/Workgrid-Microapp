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