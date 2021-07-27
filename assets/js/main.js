(function($) {
  $('#back2top').on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {

      $('#header').addClass('header-scroll');
      $('#navbar').addClass('navbar-scroll');
    } else {
      $('#header').removeClass('header-scroll');
      $('#navbar').removeClass('navbar-scroll');
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {

      $('#back2top').show();
    } else {
      $('#back2top').hide();
    }
  });

  $('#navbar').scroll(function() {
    if ($(this).scrollTop() < 100) {
      $('nav li').removeClass('active-link');
    }
  })

  $('#navbar').onePageNav({
    currentClass: 'active-link',
    scrollThreshold: 0.3,
    scrollSpeed: 750,
    easing: 'swing',
    filter: ':not(.navbar-brand)'
  });

})(jQuery);