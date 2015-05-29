jQuery(document).ready(function ($) {

  $(window).load(function(){

	  $('.search-api-sorts li a').addClass('btn');
	  
	  $('header input[type="submit"]').addClass('btn');
	  
	  $('#scroll-menu input[type="submit"]').addClass('btn');
	  
	  $('.search-api-sort-active a:last').removeClass('btn');
	
	  $('.node-wrap .flexslider').flexslider({
	    controlNav: false, 
	    animation: "slide",
	    touch: true
	  });
	  
	  $('.flexslider').flexslider({
	    animation: "slide",  
	    touch: true,
	    controlsContainer: ".slider",
	
	    start: function(slider) {
	      slider.removeClass('flex-loading');
	    }  
	  });
	 
	  var $container = $('#isotope_test');
	
	  $container.isotope({
	    itemSelector : '.switch'
	  });
	  
	  var $optionSets = $('#options .option-set'),
	      $optionLinks = $optionSets.find('a');
	
	  $optionLinks.click(function(){
	    var $this = $(this);
	    // don't proceed if already selected
	    if ( $this.hasClass('selected') ) {
	      return false;
	    }
	    var $optionSet = $this.parents('.option-set');
	    $optionSet.find('.selected').removeClass('selected');
	    $this.addClass('selected');
	
	    // make option object dynamically, i.e. { filter: '.my-filter-class' }
	    var options = {},
	        key = $optionSet.attr('data-option-key'),
	        value = $this.attr('data-option-value');
	    // parse 'false' as false boolean
	    value = value === 'false' ? false : value;
	    options[ key ] = value;
	    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	      // changes in layout modes need extra logic
	      changeLayoutMode( $this, options )
	    } else {
	      // otherwise, apply new options
	      $container.isotope( options );
	    }
	    
	    return false;
	  });
	  
	});  
  
  jQuery("ul.accordion li").each(function(){
	  if(jQuery(this).index() > 0){
	  jQuery(this).children(".accordion-content").css('display','none');
	  }
	  else{
	  jQuery(this).find(".accordion-head-image").addClass('active');
	  }
	
	  jQuery(this).children(".accordion-head").bind("click", function(){
	  jQuery(this).children().addClass(function(){
	  if(jQuery(this).hasClass("active")) return "";
	    return "active";
	  });
	  jQuery(this).siblings(".accordion-content").slideDown();
	  jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
	  jQuery(this).parent().siblings("li").find(".active").removeClass("active");
	  });
	});

  var flag = true;

	$(window).bind('load resize',function() {
		if($(window).width() > 768) {	
			$(window).scroll(function() {
				var vPos = $(window).scrollTop();
				var totalH = $('.before-content').offset().top;
				var finalSize = totalH - vPos;
				var scrolled = $(window).scrollTop(); //Parallax window scroll height
					
				if(finalSize <= 10) {
					if(flag){
					$('#scroll-menu').animate({'top':'0'},150);
					$('nav.main').hide();
					}	
					flag=false;	
				} else if(finalSize > 10) {
					if(!flag){
					$('#scroll-menu').animate({'top':'-45'},150);
					$('nav.main').show();
					}
					flag=true;
				}
			});
		} else {
			$(window).unbind('scroll');
		}
	});
	
	$('header .main-menu-nav').mobileMenu();
	
	$("html").niceScroll();
	
	$('.search-api-sorts a').removeClass('active');
	
	$('.checkout-review').addClass('table');
  
  $('.dropdown-toggle').dropdown()
  
  $('input[type="submit"]').addClass('btn');
  
  $('ul.menu').superfish({delay	: 100});
  
  $(".cart-empty-block").html("<button class='btn btn-small'><i class='icon-shopping-cart'></i>0 Items</div>");

  $("a[rel^='prettyPhoto']").prettyPhoto();
  
  $().UItoTop({ easingType: 'easeOutQuart' });

  $('#recent_projects').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#next",
	      key	: "right"
	    },
	    prev : {
	      button : "#prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: false
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 3
	      }
	    }
	  });
	  
	  $('#store-carousel-list-wrap').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#store-next",
	      key	: "right"
	    },
	    prev : {
	      button : "#store-prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: true
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 3
	      }
	    }
	  });
	  
	  $('#store-featured-carousel-list-wrap').carouFredSel({
	    width: '100%',
	    responsive: true,
	    circular : false,
	    infinite : false,
	    auto: false,
	    next : {
	      button : "#store-featured-next",
	      key	: "right"
	    },
	    prev : {
	      button : "#store-featured-prev",
	      key	: "left"
	    },
	    swipe: {
	      onMouse: true,
	      onTouch: true
	    },
	    items: {
	      
	      visible: {
	        min: 1,
	        max: 3
	      }
	    }
	  });

});