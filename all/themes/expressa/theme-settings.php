<?php
/**
 * Implements hook_form_system_theme_settings_alter()
 */
function expressa_form_system_theme_settings_alter(&$form, &$form_state) {
  
  // Main settings wrapper
  $form['options'] = array(
    '#type' => 'vertical_tabs',
    '#default_tab' => 'defaults',
    '#weight' => '-10',
    '#attached' => array(
      'css' => array(drupal_get_path('theme', 'expressa') . '/css/theme-settings.css'),
    ),
  );
  
  // General
  $form['options']['general'] = array(
    '#type' => 'fieldset',
    '#title' => t('General'),
  );
          
       
    // Breadcrumbs
    $form['options']['general']['breadcrumbs'] = array(
      '#type' => 'checkbox',
      '#title' => t('Breadcrumbs'),
      '#default_value' => theme_get_setting('breadcrumbs'),
    );
    
    // Scroll Menu
    $form['options']['general']['scroll_menu'] = array(
      '#type' => 'checkbox',
      '#title' => t('Scroll Menu'),
      '#default_value' => theme_get_setting('scroll_menu'),
    );
                  
  // Layout
  $form['options']['layout'] = array(
    '#type' => 'fieldset',
    '#title' => t('Layout'),
  );
  
    // Site Layout
    $form['options']['layout']['site_layout'] = array(
      '#type' => 'select',
      '#title' => 'Body Layout',
      '#default_value' => theme_get_setting('site_layout'),
      '#options' => array(
        'boxed' => t('Boxed (default)'),
        'wide' => t('Wide'),
      ),
    );
    
    //Background
    $form['options']['layout']['background'] = array(
      '#type' => 'fieldset',
      '#title' => '<h3 class="options_heading">Background</h3>',
      '#states' => array (
          'visible' => array(
            'select[name=site_layout]' => array('value' => 'boxed')
          )
        )
    );
    
    // Body Background 
    $form['options']['layout']['background']['body_background'] = array(
      '#type' => 'select',
      '#title' => 'Body Background',
      '#default_value' => theme_get_setting('body_background'),
      '#options' => array(
        'expressa_backgrounds' => t('Background Image (default)'),
        'custom_background_color' => t('Background Color'),
      ),
    );
    
    // Expressa Background Choices
    $form['options']['layout']['background']['background_select'] = array(
      '#type' => 'radios',
      '#title' => 'Select a background pattern:',
      '#default_value' => theme_get_setting('background_select'),
      '#options' => array(
        'grunge_wall' => 'item',
        'brushed_alu' => 'item',
        'retina_wood' => 'item',
        'noisy_grid' => 'item',
        'dark_wood' => 'item',
        'cartographer' => 'item',
        'illusion' => 'item',
        'nistri' => 'item',
      ),
      '#states' => array (
          'visible' => array(
            'select[name=body_background]' => array('value' => 'expressa_backgrounds')
          )
        )
      );  
    
      // Custom Background Color
      $form['options']['layout']['background']['body_background_color'] =array(
        '#type' => 'jquery_colorpicker',
		    '#title' => t('Body Background Color'),
		    '#default_value' => theme_get_setting('body_background_color'),
	      '#states' => array (
	        'visible' => array(
	          'select[name=body_background]' => array('value' => 'custom_background_color')
	        )
        )
      );    

  // Color
  $form['options']['color'] = array(
    '#type' => 'fieldset',
    '#title' => t('Color'),
  );  
  
    // Colors
    $form['options']['color']['colors'] = array(
      '#type' => 'fieldset',
      '#title' => '<h3 class="options_heading">Color Scheme</h3>',
    );
  
      // Color Scheme
      $form['options']['color']['colors']['color_scheme'] = array(
        '#type' => 'select',
        '#title' => 'Color Scheme',
        '#default_value' => theme_get_setting('color_scheme'),
        '#options' => array(
          'dark-blue' => t('Dark Blue'),
          'light-blue' => t('Light Blue'),
          'green' => t('Green'),
          'brown' => t('Brown'),
          'purple' => t('Purple'),
          'orange' => t('Orange (default)'),
          'red' => t('Red'),
          'black' => t('Black'),
          'custom' => t('Custom'),
        ),
      );
      
      // Custom Color
      $form['options']['color']['colors']['custom_color'] = array(
		    '#type' => 'jquery_colorpicker',
		    '#title' => t('Color'),
		    '#default_value' => theme_get_setting('custom_color'),
		    '#states' => array (
          'visible' => array(
            'select[name=color_scheme]' => array('value' => 'custom')
          )
        )
      );
        
  // SEO
  $form['options']['seo'] = array(
    '#type' => 'fieldset',
    '#title' => 'SEO',
  ); 
  
    // SEO Title
    $form['options']['seo']['seo_title'] = array(
      '#type' => 'textfield',
      '#title' => t('Title'),
      '#default_value' => theme_get_setting('seo_title'),
    );
    
     // SEO Description
    $form['options']['seo']['seo_description'] = array(
      '#type' => 'textarea',
      '#title' => t('Description'),
      '#default_value' => theme_get_setting('seo_description'),
    );
    
     // SEO Keywords
    $form['options']['seo']['seo_keywords'] = array(
      '#type' => 'textarea',
      '#title' => t('Keywords'),
      '#default_value' => theme_get_setting('seo_keywords'),
    );
    
  // CSS
  $form['options']['css'] = array(
    '#type' => 'fieldset',
    '#title' => t('CSS'),
  ); 
  
    // User CSS
    $form['options']['css']['user_css'] = array(
      '#type' => 'textarea',
      '#title' => t('User CSS'),
      '#description' => t('Add your own custom CSS.'),
      '#default_value' => theme_get_setting('user_css'),
    );
  
  
  // Tracking
  $form['options']['tracking'] = array(
    '#type' => 'fieldset',
    '#title' => t('Tracking'),
  ); 
  
    // Tracking Code
    $form['options']['tracking']['tracking_code'] = array(
      '#type' => 'textarea',
      '#title' => t('Tracking Code'),
      '#description' => t('Add any tracking code such as Google Analytics.'),
      '#default_value' => theme_get_setting('tracking_code'),
    );
    
  // Twitter
  $form['options']['twitter'] = array(
    '#type' => 'fieldset',
    '#title' => 'Twitter',
  );    
  
     // Twitter App Consumer Key
    $form['options']['twitter']['twitter_app_consumer_key'] =array(
      '#type' => 'textfield',
      '#title' => 'Twitter App Consumer Key',
      '#default_value' => theme_get_setting('twitter_app_consumer_key'),
      '#states' => array (
        'invisible' => array(
          'input[name="enable_twitter_feed"]' => array('checked' => FALSE)
        )
      )
    );
    
    // Twitter App Consumer Secret
    $form['options']['twitter']['twitter_app_consumer_secret'] =array(
      '#type' => 'textfield',
      '#title' => 'Twitter App Consumer Secret',
      '#default_value' => theme_get_setting('twitter_app_consumer_secret'),
      '#states' => array (
        'invisible' => array(
          'input[name="enable_twitter_feed"]' => array('checked' => FALSE)
        )
      )
    );
    
    // Twitter App Access Token
    $form['options']['twitter']['twitter_app_access_token'] =array(
      '#type' => 'textfield',
      '#title' => 'Twitter App Access Token',
      '#default_value' => theme_get_setting('twitter_app_access_token'),
      '#states' => array (
        'invisible' => array(
          'input[name="enable_twitter_feed"]' => array('checked' => FALSE)
        )
      )
    );
    
    // Twitter App Access Token Secret
    $form['options']['twitter']['twitter_app_access_secret'] =array(
      '#type' => 'textfield',
      '#title' => 'Twitter App Access Token Secret',
      '#default_value' => theme_get_setting('twitter_app_access_secret'),
      '#states' => array (
        'invisible' => array(
          'input[name="enable_twitter_feed"]' => array('checked' => FALSE)
        )
      )
    );
    
}

?>