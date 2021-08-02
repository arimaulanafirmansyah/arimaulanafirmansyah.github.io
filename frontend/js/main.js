(function ($) {
	"use strict";

	/*----------------------------
       	Preloader Active
       	------------------------------*/

	$(window).on('load',function(){
		$('.loading').fadeOut();
	});

       /*----------------------------
       		Owlcarousel Active
       		------------------------------*/
	$(".owl-carousel").owlCarousel({
		items: 1,
		autoplay:true,
		autoplayTimeout:5000,
		loop:true,
		center:true,
	});



       /*----------------------------
       		Mobile menu Active
       		------------------------------*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "992"
	});



       /*----------------------------
       		Smoothscroll Active
       		------------------------------*/

	$('.main-menu nav ul').onePageNav({
		currentClass: 'active',
		changeHash: true,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	$('html').smoothScroll();



       /*----------------------------
       		Sticky Header Active
       		------------------------------*/

	$(window).on('scroll',function(){
		if ($(window).scrollTop() >= 330) {
			$('.header-area').addClass('fixed');
		}
		else {
			$('.header-area').removeClass('fixed');
		}
	});



       /*----------------------------
       		MagnificPopup Active
       		------------------------------*/

	$('.popup').magnificPopup({
		type: 'image',
	});



       /*----------------------------
       		Portfolio isotope Active
       		------------------------------*/

	$('.container').imagesLoaded( function() {

		$('.portfolio-category').on( 'click', 'a', function() {
			event.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			}
		})	
	});
	$('.portfolio-category').on('click', 'li', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});


       /*----------------------------
       		Back to top scrollbar Active
       		------------------------------*/

	$(window).on('scroll',function(){
		if ($(window).scrollTop() >= 330) {
			$('.back_top').fadeIn();
		}
		else {
			$('.back_top').fadeOut();
		}
	});

})(jQuery);	

