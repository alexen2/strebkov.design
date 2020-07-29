if (jQuery(window).width() > 1199) {
	$(".menu__item-dropdown").hover(
		function () {
			$(this).find(".menu__wrapper-dropdown").fadeIn(290);
		},
		function () {
			$(this).find(".menu__wrapper-dropdown").fadeOut(290);
		}
	);
}
