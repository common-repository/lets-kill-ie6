<?php
/**
  * Plugin Name: Let's kill IE6
  * Plugin URI: https://wordpress.org/plugins/lets-kill-ie6/
  * Description: IE6下向用户提示升级浏览器,灭掉IE6，我们在行动！Let's kill IE6!
  * Version: 2.12
  * Author: Carlos
  * Author URI: http://overtrue.me
 */
add_action('wp_head','add_kill_script',5);
function add_kill_script(){
    wp_enqueue_script('killjs',plugins_url('/lets-kill-ie6.js',__FILE__));
    echo '<script>var killIE6ImgUrl = "'.plugins_url('/img',__FILE__).'";</script>';
}