jQuery(window).on('load resize', function(){
	var windowHeight = jQuery(window).height();
	jQuery('#banner').height(windowHeight);
});

jQuery(document).ready(function($){
	$('.banner-slider').slick({
	  dots: false,
	  autoplay: true,
	  infinite: true,
	  speed: 350,
	  slidesToShow: 1,
	  arrows: false,
	  adaptiveHeight: true
	});

	$('.dev-slider').slick({
	  dots: true,
	  autoplay: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: false,
	  adaptiveHeight: true
	});

	$('.logo-slider').slick({
	  dots: false,
	  autoplay: true,
	  infinite: true,
	  speed: 350,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	  ]
	});

	$('.result-slider').slick({
	  dots: false,
	  autoplay: true,
	  infinite: true,
	  speed: 300,
	  arrows: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  nextArrow: '<button type="button" class="slick-next"><span class="icon-next-arrow"></span></button>',
	  prevArrow: '<button type="button" class="slick-prev"><span class="icon-left-arrow"></span></button>',
	  responsive: [
	    {
	      breakpoint: 1439,
	      settings: {
	        arrows: false,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        arrows: false,
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.cs-slider').owlCarousel({
	    center: true,
	    items:4,
	    loop:false,
	    margin:30,
	    autoplay:true,
	    autoplayTimeout:4000,
	    autoplayHoverPause:true,
	    nav:true,
	    navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-next-arrow"></span>'],
	    responsive:{
	        600:{
	            items:4
	        }
	    }
	});

});

var a = 0;
$(window).scroll(function() {
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
            //alert('finished');
          }
        });
    });
    a = 1;
  }
});