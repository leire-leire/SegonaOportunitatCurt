$(document).ready(function() {

  function animate(cb) {
    $('.grid').addClass('closed');

    // Cierra puertas (2s), luego mueve el ascensor, luego abre (1s más)
    setTimeout(function() {
      cb(); // mover ascensor
      $('.grid').removeClass('closed');
    }, 2000);
  }

  $('.pannel button, .floor button').click(function() {
    const floor = parseInt($(this).text(), 10) || 0;

    animate(function() {
      $('#elevator').css({
        top: (-100 * floor) + '%'
      });
    });
  });

});