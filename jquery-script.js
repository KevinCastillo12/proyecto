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
  const scrollToSection = (id, offset = 100) => {
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset
    }, 600);
  };

  $('#enlace-inicio').click(e => { e.preventDefault(); scrollToSection('body', 0); });
  $('#enlace-equipo').click(e => { e.preventDefault(); scrollToSection('#equipo'); });
  $('#enlace-servicio').click(e => { e.preventDefault(); scrollToSection('#servicio'); });
  $('#enlace-trabajo').click(e => { e.preventDefault(); scrollToSection('#trabajo'); });
  $('#enlace-contacto').click(e => { e.preventDefault(); scrollToSection('#contacto'); });
});
