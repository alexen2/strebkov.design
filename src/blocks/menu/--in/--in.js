jQuery(document).ready(function () {
	let windowWidth = $(window).width();

	menuDesctopHover(windowWidth);

	jQuery(window).resize(function () {
		windowWidth = $(window).width();
		menuDesctopHover(windowWidth);
	});

	function menuDesctopHover(width) {
		if (width > 1199) {
			$(".menu__item-dropdown").hover(
				function () {
					$(this).find(".menu__wrapper-dropdown").fadeIn(290);
					console.log(width);
				},
				function () {
					$(this).find(".menu__wrapper-dropdown").fadeOut(290);
				}
			);
		}
	}
});
