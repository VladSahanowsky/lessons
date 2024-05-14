var carsUndisable = function() {
    document.getElementById('equipment').disabled = false;
    document.getElementById('modifcation').disabled = false;
  }

  $('.menu-btn').on('click', function(e){
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
    $('.page--content').toggleClass('page--content_active');
    $('.footer').toggleClass('footer_active');
})
