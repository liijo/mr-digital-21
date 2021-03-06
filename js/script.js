jQuery(window).on('load resize', function(){
	var windowHeight = jQuery(window).height();
	//jQuery('#banner').height(windowHeight);
	if(jQuery(window).width() > 767){
		jQuery('.logo-slider').addClass('owl-carousel');
		jQuery('.logo-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots:false,
			items:6,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		});
		jQuery('.service-testim-slider').trigger('destroy.owl.carousel');
		jQuery('.service-testim-slider').addClass('off');
		jQuery('.service-testim-slider').removeClass('owl-carousel');
	}
	else{
		jQuery('.service-testim-slider').addClass('owl-carousel');
		jQuery('.service-testim-slider').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			dots:false,
			items:1,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:true,
		});

		jQuery('.logo-slider').trigger('destroy.owl.carousel');
		jQuery('.logo-slider').addClass('off');
		jQuery('.logo-slider').removeClass('owl-carousel');
	}
});

jQuery(document).ready(function($){
	
	$('.banner-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:false,
		items:1,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
	});

	$('.result-slider').owlCarousel({
		dots: false,
		autoplay: true,
		autoplayHoverPause:true,
		loop: true,
		items: 2,
		margin: 30,
		nav: true,
		navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-next-arrow"></span>'],
		responsive:{
			1024:{
				nav: true,
				items:2
			},
			768:{
				nav: false,
				items:2
			},
			575:{
				nav: false,
				items:1
			},
			0:{
				nav: false,
				items:1
			}
		}
	});

	$('.badge-slider').owlCarousel({
		dots: false,
		autoplay: true,
		autoplayHoverPause:true,
		loop: true,
		items: 3,
		margin: 30,
		nav: true,
		navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-next-arrow"></span>'],
		responsive:{
			1024:{
				nav: true,
				items:3
			},
			768:{
				nav: false,
				items:3
			},
			575:{
				nav: false,
				items:2
			},
			0:{
				nav: false,
				items:1
			}
		}
	});

	$('.checklist-slider').owlCarousel({
		dots: false,
		autoplay: true,
		autoplayHoverPause:true,
		loop: true,
		items: 3,
		margin: 0,
		nav: true,
		navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-next-arrow"></span>'],
		responsive:{
			1024:{
				nav: true,
				items:3
			},
			768:{
				nav: false,
				items:2
			},
			575:{
				nav: false,
				items:1
			},
			0:{
				nav: false,
				items:1
			}
		}
	});

	$('.dev-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		items: 1,
		autoplayHoverPause:true,
	});

	$('.testim-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		items: 1,
		autoplayHoverPause:true,
	});

	$('.cs-slider').owlCarousel({
		dots: false,
		//center: true,
		items:4,
		stagePadding: 200,
		loop:false,
		margin:30,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		nav:true,
		navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-next-arrow"></span>'],
		responsive:{
			1024:{
				nav: true,
				items:3
			},
			768:{
				nav: false,
				items:2
			},
			575:{
				nav: false,
				items:1
			},
			0:{
				nav: false,
				items:1
			}
		}
	});

	$('.team-slider').owlCarousel({
		dots: false,
		items:4,
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		nav:true,
		navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-next-arrow"></span>'],
		responsive:{
			1024:{
				nav: true,
				items: 4
			},
			768:{
				nav: false,
				items:2
			},
			575:{
				nav: false,
				items:1
			},
			0:{
				nav: false,
				items:1
			}
		}
	});

	$('.navbar-toggler').click(function(){
		$('#top-bar').toggleClass('menu-active');
		$('body').toggleClass('overflow-hidden');
	});

});

var a = 0;
$(window).scroll(function() {
	if($('#counter').length){
		var oTop = $('#counter').offset().top - window.innerHeight;
		if (a == 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				var $this = $(this),
				countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
	        		}
	    		});
			});
			a = 1;
		}
	}
});

jQuery(window).scroll(function(){
	var headerTop = $('header').height();
	if($('header').hasClass('short-header')){
		headerTop = 1;
	}
    if($(this).scrollTop() >= headerTop){
    	$('#top-bar').removeClass('position-absolute');
    	$('#top-bar').addClass('position-fixed visible');
    }
    else{
    	$('#top-bar').addClass('position-absolute');
    	$('#top-bar').removeClass('position-fixed visible');	
	}
});