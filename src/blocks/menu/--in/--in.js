jQuery(document).ready(function () {
	let windowWidth = $(window).width();

	jQuery(window).resize(function () {
		windowWidth = $(window).width();
		$('.menu__item-dropdown').find(".menu__wrapper-dropdown").removeAttr('style');
	});

	$(".menu__item-dropdown").hover(
		function () {
			if(windowWidth > 1199) {
				$(this).find(".menu__wrapper-dropdown").fadeIn(290);				
			}	
		},
		function () {
			if(windowWidth > 1199) {
				$(this).find(".menu__wrapper-dropdown").fadeOut(290);
			}
		}
	);
});
