<?php
/**
 * @file
 * Expressa's node template for the Store.
 */
?>

<div class="span3">
  <div class="store-item">
	  <div class="store--item-picture">
	    <?php print render($content['product:field_image']); ?>
	  </div>
	  
	  <div class="store-item-content">
	    <a href="<?php print $node_url; ?>"><?php echo $title; ?></a>
	  
	    <div class="clearfix"></div>
	    <div class="store-item-price-rating">
	    <div style="float:left;">
	      <?php print render($content['product:commerce_price']); ?>
	    </div>
	    <div style="float: right;">
	      <?php print render($content['field_rating']); ?>
	    </div>
	    </div>
	    <div class="clearfix"></div>
	    <?php print render($content['field_reference']); ?>
	  </div>
  </div>
</div>