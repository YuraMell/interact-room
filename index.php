<?php
/**
 * Template Name: Интерактивная комната
 */
get_header();

// categories images

  $asoc_arr = [];

  $category_json = $_GET["category"];
  // $category_string = json_encode($category_json);
  // $category_name = substr($category_string, 6, -4);


//image URL`s

  $prod_cat_args = array(
      'taxonomy'    => 'product_cat',
  );

  $woo_categories = get_categories( $prod_cat_args );
  foreach ( $woo_categories as $woo_cat ) {
    $cat_id = $woo_cat->term_id; //category ID
    $cat_name = $woo_cat->name; //category name
    $cat_slug = $woo_cat->slug; //category slug
    $category_thumbnail_id = get_woocommerce_term_meta($cat_id, 'thumbnail_id', true);
    $image_url = wp_get_attachment_url($category_thumbnail_id);  
    $asoc_arr[$image_url] = $cat_slug;
  }
  
  $products = [];
  $skus = [];
  $walpappers = 'wallpappers';

  $mypost_Query = new WP_Query(array(
    'post_type'      => 'product',
    // 'tax_query'     => array(
    //     array(
    //         'taxonomy'  => 'product_cat', // таксономия 
    //         'field'     => 'slug',          // тип поля (slug или id) 
    //         'terms'     => $walpappers       // ярлык (slug) или id 
    //     )
    // )
));

global $product;

  if ($mypost_Query->have_posts()) {
      while ($mypost_Query->have_posts()) {
          $mypost_Query->the_post();
          $item = get_the_post_thumbnail_url($loop->post->ID);
          $sku_item = get_post_meta( $post->ID, '_sku', true );
          array_push($products, $item);
          array_push($skus, $sku_item);
          // $skus[$item] = $sku_item; 
      }
  } 
?>


<script>
  let bgs = '<?php echo json_encode($products, JSON_FORCE_OBJECT); ?>'
  let asocArr = '<?php echo json_encode($asoc_arr, JSON_FORCE_OBJECT); ?>'
  let skus = '<?php echo json_encode($skus, JSON_FORCE_OBJECT); ?>'
  
  
</script>
  
<div id="root"></div>

<?php get_footer(); ?>