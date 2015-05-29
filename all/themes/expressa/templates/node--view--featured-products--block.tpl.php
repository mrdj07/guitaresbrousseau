<?php
/**
 * @file
 * Expressa's node template for the Featured Products block.
 */
?>
<div class="featured-products">

  <div class="featured-product-picture">
    <?php print render($content['field_main_image']); ?>
  </div>

  <div class="featured-product-content">
    <a href="<?php print $node_url; ?>"><?php echo $title; ?></a>
  	<?php print render($content['product:commerce_price']); ?>
  	
  	<?php print render($content['field_rating']); ?>

  </div>  	
     
</div>  		  	  