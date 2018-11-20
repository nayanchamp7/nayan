(function($){

	// preloader code
	var loaderDiv = $(".page-loader");
	//loaderDiv.hide();
	//var winHight = $( window ).height();
	//loaderDiv.css("height",winHight);
	loaderDiv.delay(1500).fadeOut(500);

	$('button').append('<div class="rippleJS"></div>');


	// Add or Remove Active Class
	$('.menu a').on('click',function(event){
		event.preventDefault();
		$('.menu a.active').removeClass('active');
		$(this).addClass('active');
	});

	// popup code
	$('#more-details').on('click',function(event){
		event.preventDefault();
		$('.sidebar').css({'left':'-100%','transition':'1s ease-in-out'});
		$('.my-container').css({'top':'100px','transition-delay':'.3s'});
		//alert('hi');
	});

	$('.my-container a').on('click',function(event){
		event.preventDefault();
		$('.sidebar').css({'left':'0','transition':'1s ease-in-out'});
		$('.my-container').css({'top':'-200%'});
	});

	// isotope js
	$('.porfolio-selector button').click(function(){
		// active deactive isotop selector
		$('.button').not(this).removeClass('is-checked');
		$(this).addClass('is-checked');

		// isotope initialize
		var selector = $(this).attr('data-filter');
	    $('.portfolio-grid').isotope({
		    itemSelector: '.portfolio-grid-item',
		  	layoutMode: 'masonry', 
		    filter: selector,
		    animationOptions: {
		    	duration: 750,
		     	easing: 'linear',
		     	queue: false,

		   },
		   masonry: {
			    columnWidth: '.portfolio-grid-item'
			  }
		});
		
	});

	// magnific popup js
	$('.magnific-img').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});



})(jQuery)

	$(document).ready(function(){
		// Home Section Js
		
		$('.welcome-slide').owlCarousel({
		    items: 1,
		    mouseDrag: false,
		    pullDrag: false,
		    loop: true,
		    autoplay: true,
		    autoplayTimeout: 5000,
		    animateOut: 'fadeOut'
		    
		});


		// About Section Js

		$('#about').on('click',function(event){
			event.preventDefault();
			$('.about-section-wrapper').css({'transform': 'translate(0,0)','display':'block'});
			//$('.sidebar').addClass('slide-anim');
		});

		$('.my-drawer ul li a').on('click',function(e){
			e.preventDefault();
			

			$(this).siblings().toggleClass( 'drawerShow' );
		});



		$('.menu a').on('click',function(event){
			var classes = [ 'style1', 'style2', 'style3' ]; // the classes you want to add
			//$('.menu a').each(function(i) { // the element(s) you want to add the class to.
				$(this).addClass(classes[ Math.floor( Math.random()*classes.length ) ] );
			//});
		});
	});