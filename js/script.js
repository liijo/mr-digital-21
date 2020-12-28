jQuery(window).on('load resize', function(){
	var windowHeight = jQuery(window).height();
	jQuery('#banner').height(windowHeight);
});

jQuery(document).ready(function($){
	$('.banner-slider').slick({
	  dots: false,
	  autoplay: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: false,
	  adaptiveHeight: true
	});

	$('.result-slider').slick({
	  dots: false,
	  autoplay: true,
	  infinite: true,
	  speed: 300,
	  arrows: true,
	  slidesToShow: 2,
	  nextArrow: '<button type="button" class="slick-next"><span class="icon-next-arrow"></span></button>',
	  prevArrow: '<button type="button" class="slick-prev"><span class="icon-left-arrow"></span></button>',
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 300,
	      settings: {
	        arrows: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});