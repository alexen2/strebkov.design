jQuery(document).ready(function() {
	jQuery("#hamburger").click(function () {
		jQuery(this).toggleClass('close');
		jQuery(".menu-mobile").toggleClass('menu-mobile--open');
		jQuery('body').toggleClass('overflow-hidden');
	});

	jQuery(window).resize(function() {		
		if (jQuery(window).width() > 767 ) {			
			jQuery('.menu-mobile').removeClass('menu-mobile--open');
			jQuery('body').removeClass('overflow-hidden');
		}
	});

	$(window).scroll(function(){
		var $this = $(this),
			 	st = $this.scrollTop();

		if(st > 285){
			$('.wrapper').addClass('scrolled');
		}else{
			$('.wrapper').removeClass('scrolled');
		}
	});	
});