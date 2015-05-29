<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>

<section id="options" class="clearfix">
  <ul id="filters" class="option-set clearfix" data-option-key="filter">
	  <li><a href="#filter" data-option-value="*" class="selected small btn">All</a></li>
    <?php foreach ($rows as $id => $row): ?>
      <?php print $row; ?>
    <?php endforeach; ?>
    </ul>
</section>