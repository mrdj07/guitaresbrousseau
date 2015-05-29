<?php
/**
 * @file
 * Expressa's node template for the Store Carousel block.
 */

global $base_url;
$sku = $content['product:commerce_price']['#object']->sku;
$product = commerce_product_load_by_sku($sku);
$id = $product->product_id;
?>

<li>
  <div class="store-item">
  
	  <div class="store-item-picture">
	    <a href="<?php print $node_url; ?>"><?php print render($content['field_main_image']); ?></a>
	  </div>
  
	  <div class="store-item-content">
	    <a href="<?php print $node_url; ?>"><?php echo $title; ?></a>
	  
	    <div class="clearfix"></div>
	  	<?php print render($content['product:commerce_price']); ?>
	   	
	   	<div class="clearfix"></div>
	   	<div class="store-carousel-field-reference">
	    
	   	</div>
	  </div>
	  
  </div> 
</li>