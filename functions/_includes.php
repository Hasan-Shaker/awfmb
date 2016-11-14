<?php

/**
 * Reset some WordPress behaviours
 */ 
// include __DIR__ . '/reset.php';


/**
 * Itility functions
 */ 
// include __DIR__ . '/utilities.php';

/**
 * Helpers functions
 */
// include __DIR__ . '/helpers.php';

/**
 * Admin functions
 */ 
if ( is_admin() ) include __DIR__ . '/admin.php';


/**
 * Theme customizer
 */ 
// include __DIR__ . '/customizer.php';


/**
 * Custom template tags for this theme
 */ 
// include __DIR__ . '/template-tags.php';


/**
 * Override TinyMCE in backend
 */ 
// include __DIR__ . '/tinymce-styles.php';


/**
 * Custom taxonomies
 */ 
// include __DIR__ . '/taxonomies/_includes.php';


/**
 * Custom posts types 
 */ 
// include __DIR__ . '/post-types/_includes.php';


/**
 * Custom roles
 */ 
// include __DIR__ . '/roles/_includes.php';


/**
 * Custom shortcodes
 */ 
// include __DIR__ . '/shortcodes/_includes.php';


/**
 * Custom Walkers
 */ 
// include __DIR__ . '/walkers/_includes.php';


/**
 * Settings related to WooCommerce plugin
 */ 
// if( class_exists( 'WooCommerce' ) ) include __DIR__ . '/woocommerce/_includes.php';


/**
 * Settings related to Advanced Custom Fields plugin
 */ 
// if ( class_exists( 'acf' ) ) include __DIR__ . '/acf.php';


/**
 * Settings related to Contact Form 7 plugin
 */
// if ( class_exists( 'WPCF7' ) ) include __DIR__ . '/contact-form-7/_includes.php';

/**
 *
 */
// include __DIR__ . '/wp-maintenance-mode.php';

/**
 * TinyMCE
 */
// include __DIR__ . '/tinymce.php';