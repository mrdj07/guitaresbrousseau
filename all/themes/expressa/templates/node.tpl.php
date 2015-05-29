<?php
/**
 * @file
 * Expressa's theme implementation to display a single Drupal node.
 */
 
if ($items = field_get_items('node', $node, 'field_image')) {
  if (count($items) == 1) {
    $image_slide = 'false';
  }
  elseif (count($items) > 1) {
    $image_slide = 'true';
  }
}
 
?>
<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix node-wrap"<?php print $attributes; ?>>

  <?php print $user_picture; ?>

  <?php print render($title_prefix); ?>

    <h2 class="node-title"<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
 
  <?php print render($title_suffix); ?>
  
  
  <?php if ($display_submitted): ?>
    <ul class="submitted">
      <li><i class="icon-user"></i> <?php print $name; ?></li>
      <li><i class="icon-calendar"></i>  <?php print format_date($node->created, 'custom', 'M d, Y'); ?></li>
      <li><i class="icon-comment"></i> <a href="<?php print $node_url;?>/#comments"><?php print $comment_count; ?> comment<?php if ($comment_count != '1') { echo "s"; } ?></a></li>  
      <?php if (render($content['field_tags'])): ?>  
      <li><div class="tags"><i class="icon-tags"></i><?php print render($content['field_tags']); ?></div></li>
      <?php endif; ?>
    </ul>
  <?php endif; ?>

  <?php if (render($content['field_image'])) : ?> 
  
	  <?php if ($image_slide == 'true'): ?>
	  <div class="flexslider">
	    <ul class="slides">
	      <?php print render($content['field_image']); ?>
	    </ul>
	  </div>  
	  <?php endif; ?>
	  
	  <?php if ($image_slide == 'false'): ?>
	    <div class="node-image">
	     <?php print render($content['field_image']); ?>
	    </div>  
	  <?php endif; ?>
  
  <?php endif; ?>
  
  <div class="node-content"<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      hide($content['field_image']);
      hide($content['field_tags']);
      print render($content);
    ?>
  </div>
  
  <?php if($teaser): ?>
  <div class="read-more"> 
  	<a class="btn" href="<?php print $node_url;?>"><?php echo t('Read More'); ?></a>
  </div>	
  <?php endif;?>
  
  <?php if(!drupal_is_front_page() && $page && module_exists('prev_next')): ?>
  <ul class="node-pagination">
    <?php if (expressa_pagination($node, 'n') != NULL): ?><li class="next-node"><?php print expressa_pagination($node, 'n'); ?> &rarr;</li><?php endif; ?>
    <?php if (expressa_pagination($node, 'p') != NULL): ?><li class="previous-node">&larr; <?php print expressa_pagination($node, 'p'); ?></li><?php endif; ?>
  </ul>
  <?php endif; ?>
  
  <div class="comments-meta"></div>

  <?php print render($content['comments']); ?>

</article>
<?php if (!$page): ?>
<hr class="post-hr">
<?php endif; ?>