$(function () {
    
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');

        if (valor === 'todos') {
            $('.cont-work').show(1000);
        } else {
            $('.cont-work').not('.' + valor).hide(1000);
            $('.cont-work').filter('.' + valor).show(1000);
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

    
    function scrollTo(offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 600);
    }

    
    $('#enlace-inicio').on('click', function (e) {
        e.preventDefault();
        scrollTo(0);
    });

    $('#enlace-equipo').on('click', function (e) {
        e.preventDefault();
        scrollTo(equipo - 100);
    });

    $('#enlace-servicio').on('click', function (e) {
        e.preventDefault();
        scrollTo(servicio - 100);
    });

    $('#enlace-trabajo').on('click', function (e) {
        e.preventDefault();
        scrollTo(trabajo - 100);
    });

    $('#enlace-contacto').on('click', function (e) {
        e.preventDefault();
        scrollTo(contacto - 100);
    });
});
