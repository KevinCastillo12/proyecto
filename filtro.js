$(function () {
    // Filtrado de trabajos
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

    // Variables para los offsets de las secciones
    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        trabajo = $('#trabajo').offset().top,
        contacto = $('#contacto').offset().top;

    // Actualizar offsets al redimensionar ventana
    $(window).on('resize', function () {
        equipo = $('#equipo').offset().top;
        servicio = $('#servicio').offset().top;
        trabajo = $('#trabajo').offset().top;
        contacto = $('#contacto').offset().top;
    });

    // Función para hacer scroll suave
    function scrollTo(offset) {
        $('html, body').animate({
            scrollTop: offset
        }, 600);
    }

    // Enlaces de navegación con desplazamiento suave
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
