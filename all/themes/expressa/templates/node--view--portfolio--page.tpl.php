<?php
/**
 * @file
 * Expressa's node template for the Portfolio page.
 */
?>

<div class="span3 switch <?php print render($content['field_portfolio_category']); ?>" style="margin-bottom: 20px;">
  <div class="portfolio-item"> 
    <figure>
      <a class="enlarge" href="<?php echo file_create_url($node->field_portfolio_image['und'][0]['uri']); ?>" rel="prettyPhoto" title="<?php print $title; ?>"><?php print render($content['field_portfolio_image']); ?></a>
    </figure>
  
    <div class="portfolio-item-description">
      <h4><?php print $title; ?></h4>
      <a class="portfolio-project-button" href="<?php print $node_url;?>"><?php echo t('View Project'); ?></a>
    </div>  
  </div>  
</div>