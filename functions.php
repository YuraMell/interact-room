<?php

add_action( 'wp_enqueue_scripts', 'style_all_pages' );
function style_all_pages() {
  wp_enqueue_style( 'all', get_stylesheet_directory_uri().'/assets/css/style.css' );
}

// import theme and styles

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
     
  wp_enqueue_style( 'general', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'slider-self', get_template_directory_uri() . '/assets/css/slider.css' );
  wp_enqueue_style( 'bottom-accordion', get_template_directory_uri() . '/assets/css/bottom-accordion.css' );
  wp_enqueue_style( 'wall-accordion', get_template_directory_uri() . '/assets/css/wall-accordion.css' );
  wp_enqueue_style( 'carousel', get_template_directory_uri() . '/assets/css/carousel.css' );
  wp_enqueue_style( 'living-room', get_template_directory_uri() . '/assets/css/living-room.css' );
  wp_enqueue_style( 'bedroom', get_template_directory_uri() . '/assets/css/bedroom.css' );



	wp_enqueue_script(
    'general',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element', 'wp-components'],
    time(), 
    true
  );
  
}

// WooCommerce 

add_action( 'after_setup_theme', 'woocommerce_support' );
function woocommerce_support() {
    add_theme_support( 'woocommerce' );
}


// console output

function console_log($data){ 
    if(is_array($data) || is_object($data)){
		echo("<script>console.log('php_array: ".json_encode($data)."');</script>");
	} else {
		echo("<script>console.log('php_string: ".$data."');</script>");
	}
}


?>


