//Implements hook_entity_presave().
function mymodule_entity_presave($entity, $type) {
  if ($type === 'node' && isset($entity->field_product)) {
    $product_ids = array();
    foreach($entity->field_product as $lang => $items) {
      foreach($items as $i => $values) {
        if(!empty($values['product_id'])) {
          $product_ids[] = $values['product_id'];
        }
      }
    }
    $products = entity_load('commerce_product', $product_ids);
    foreach($products as $id => $product) {
      $changed = false;
      //Find all translatable fields for the product
      $field_instances = field_info_instances('commerce_product', $product->type);
      foreach($field_instances as $field_name => $field_instance) {
        $field = field_info_field($field_name);
        if(!empty($field['translatable'])) {
          //Add a version of the field in the product display's language if it doesn't exist already
          if(!isset($product->{$field_name}[$entity->language])) {
            //Copy over the language-agnostic value.
            $product->{$field_name}[$entity->language] = $product->{$field_name}[LANGUAGE_NONE];
            $changed = true;
          }
        }
      }
      //Save the product.
      if($changed) {
        entity_save('commerce_product', $product);
      }
    }
  }
}