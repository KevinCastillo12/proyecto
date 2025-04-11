$(function () {
    
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');

        if (valor === 'todos') {
            $('.cont-work').fadeIn(1000);
        } else {
            $('.cont-work').fadeOut(1000);
            $('.cont-work.' + valor).fadeIn(1000);
        }
    });

    
    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

    
    $(window).on('resize', function () {
        equipo = $('#equipo').offset().top;
        servicio = $('#servicio').offset().top;
        trabajo = $('#trabajo').offset().top;
        contacto = $('#contacto').offset().top;
    });

    
    $('#enlace-inicio').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $('#enlace-equipo').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: equipo - 100 }, 600);
    });

    $('#enlace-servicio').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: servicio - 100 }, 600);
    });

    $('#enlace-trabajo').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: trabajo - 100 }, 600);
    });

    $('#enlace-contacto').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: contacto - 100 }, 600);
    });
});
