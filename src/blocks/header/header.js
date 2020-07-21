jQuery(document).ready(function () {
	jQuery("#hamburger").click(function () {
		jQuery(this).toggleClass("close");
		jQuery(".menu-mobile").toggleClass("menu-mobile--open");
		jQuery("body").toggleClass("overflow-hidden");
	});

	jQuery(window).resize(function () {
		if (jQuery(window).width() > 767) {
			jQuery(".menu-mobile").removeClass("menu-mobile--open");
			jQuery("body").removeClass("overflow-hidden");
		}
	});

	$(window).scroll(function () {
		var $this = $(this),
			st = $this.scrollTop();

		if (st > 285) {
			$(".wrapper").addClass("scrolled");
		} else {
			$(".wrapper").removeClass("scrolled");
		}
	});

	$(".menu__item-dropdown").click(function () {
		if (jQuery(window).width() < 1200) {
			$(this).toggleClass("menu__item-dropdown-active");
		}
	});

	jQuery(function ($) {
		$(document).mouseup(function (e) {
			let div = $(".menu__item-dropdown");
			let user_bag = $(".menu__item-dropdown");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				if (!user_bag.is(e.target) && user_bag.has(e.target).length === 0) {
					div.removeClass("menu__item-dropdown-active");
				}
			}
		});
	});
});
