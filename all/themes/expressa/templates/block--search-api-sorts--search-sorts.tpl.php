<?php
/**
 * @file
 * Expressa's custom Search Sorts API block template.
 */
?>

<div id="<?php print $block_html_id; ?>" class="<?php print $classes; ?>"<?php print $attributes; ?>>

	<?php print render($title_prefix); ?>
	
	<?php if ($block->subject): ?>
	  <div class="sorts-block-title"><?php print $block->subject ?></div>
	<?php endif;?>
	  
	<?php print render($title_suffix); ?>

  <div class="content"<?php print $content_attributes; ?>>
    <?php print $content ?>
  </div>
  
</div>