<?php
/**
 * @file
 * Expressa's node template for the Store Featured Carousel block.
 */
?>

<li>
  <div class="store-item">
  
	  <div class="store-item-picture">
	    <a href="<?php print $node_url; ?>"><?php print render($content['product:field_image']); ?></a>
	  </div>
  
	  <div class="store-item-content">
	    <a href="<?php print $node_url; ?>"><?php echo $title; ?></a>
	  
	    <div class="clearfix"></div>
	  	<?php print render($content['product:commerce_price']); ?>
	   	
	   	<div class="clearfix"></div>
	    <?php print render($content['field_reference']); ?>
	  </div>
	  
  </div> 
</li>