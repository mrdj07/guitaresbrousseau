  jQuery(document).ready(function ($) {
    
    $("#color-nav li ").click(function() { 
      $("link.switch").attr("href",$(this).attr('rel'));
    });
   
	  $('#slideout').hover(function() {
	    $(this).animate({left:'0px'}, {queue:false, duration: 500});
	  }, 
	  function() {
	    $(this).animate({left:'-185px'}, {queue:false, duration: 500});
	  });
	  
    $("#color-nav li").click(function() { 
      $("link.switch").attr("href",$(this).attr('class'));
    });
    
    $(".grunge-wall").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/grunge_wall.png)");
    });
    
    $(".brushed-alu").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/brushed_alu.png)");
    });
    
    $(".retina-wood").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/retina_wood.png)");
    });
    
    $(".noisy-grid").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/noisy_grid.png)");
    });
    
    $(".nistri").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/nistri.png)");
    });
    
    $(".cartographer").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/cartographer.png)");
    });
    
    $(".illusion").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/illusion.png)");
    });

    $(".dark-wood").click(function() {
      $('body').css("background-image", "url(http://refaktorthemes.com/expressa/sites/all/themes/expressa/images/backgrounds/dark_wood.png)");
    });
        
    $(".switch_wide").click(function() {
      $('#content-wrap').css({ 'max-width': '100%', 'margin': '0 auto', 'margin-top': '0px', 'padding': '20px 20px 0px 20px' });
      $('#footer-wrap').css({ 'max-width': '100%', 'margin-bottom': '0px'});
      $('.bg_patterns_wrap').css({ 'display': 'none'});
    });

    $(".switch_boxed").click(function() {
      $('#content-wrap').css({ 'max-width': '1200px', 'margin': '0 auto', 'margin-top': '20px', 'padding': '20px 20px 0px 20px'});
      $('#footer-wrap').css({ 'max-width': '1240px'});
      $('.bg_patterns_wrap').css({ 'display': 'block'});

    });
      
  });