if (jQuery(window).width() > 767) {
  $('.menu__item-dropdown').hover(
    function() {
      $(this).find('.menu__wrapper-dropdown').fadeIn(400);
    },
    function() {
      $(this).find('.menu__wrapper-dropdown').fadeOut(400);
    }
  );
}