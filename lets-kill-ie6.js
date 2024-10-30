/**
 * Let's Kill IE6 插件
 * @author Carlos <anzhengchao@gmail.com>
 * @link   http://overtrue.me
 * @version 2.2
 */
if (typeof killIE6ImgUrl == 'undefined') killIE6ImgUrl = '/wp-content/plugins/lets-kill-ie6/img';
var killHtml =
'<style>'+
    'body{ background:#fff !important;}'+
    '#lets-kill-ie6-wrapper{ position:fixed; height:100%;height:100%;top:0; left:0;right:0;bottom:0; z-index:99999999; background:#fff;}'+
    '#lets-kill-ie6,#lets-kill-ie6 *{margin:0;padding:0;}'+
    '#lets-kill-ie6{height:450px;width:702px;position:absolute;left:50%;margin-left:-351px;top:50%;margin-top:-265px}'+
    '#lets-kill-ie6 div.lets-kill-ie6-top{background:#fff url(' + killIE6ImgUrl + '/top.jpg) center center no-repeat;height:360px;clear:both}'+
    '#lets-kill-ie6 a.lets-kill-ie6-a{outline:0;float:left;border:1px solid #fff;display:inline-block;width:98px;height:87px;background-position:center center;background-repeat:no-repeat}'+
    '#lets-kill-ie6 a.lets-kill-ie6-a:hover{border:1px solid #bebebe}'+
    '#lets-kill-ie6 a.chrome{background-image:url(' + killIE6ImgUrl + '/chrome.jpg)}'+
    '#lets-kill-ie6 a.firefox{background-image:url(' + killIE6ImgUrl + '/firefox.jpg)}'+
    '#lets-kill-ie6 a.safari{background-image:url(' + killIE6ImgUrl + '/safari.jpg)}'+
    '#lets-kill-ie6 a.opera{background-image:url(' + killIE6ImgUrl + '/opera.jpg)}'+
    '#lets-kill-ie6 a.c360{background-image:url(' + killIE6ImgUrl + '/360.jpg)}'+
    '#lets-kill-ie6 .lets-kill-ie6-plugins{height:30px;line-height:30px;text-align:right;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:12px;color:#777}'+
    '#lets-kill-ie6 .lets-kill-ie6-plugins a.lets-kill-ie6-plugins-a{font-size:12px;color:#777;text-decoration:none;}'+
    '#lets-kill-ie6 .lets-kill-ie6-plugins a.lets-kill-ie6-plugins-a:hover{color:#333}'+
    '#lets-kill-ie6 .lets-kill-ie6-links{height:100px;padding-left:120px;}'+
'</style>'+
'<div id="lets-kill-ie6-wrapper">'+
    '<div id="lets-kill-ie6">'+
    '<div class="lets-kill-ie6-top"></div>'+
    '<div class="lets-kill-ie6-links">'+
        '<a href="https://chrome.google.com/"target="_blank"class="lets-kill-ie6-a chrome"title="谷歌Chrome浏览器"></a>'+
        '<a href="https://www.google.com/chrome/browser/"target="_blank"class="lets-kill-ie6-a firefox"title="火狐浏览器"></a>'+
        '<a href="http://support.apple.com/downloads/#internet"target="_blank"class="lets-kill-ie6-a safari"title="苹果Safari浏览器"></a>'+
        '<a href="http://www.opera.com/"target="_blank"class="lets-kill-ie6-a opera"title="Opera浏览器"></a>'+
        '<a href="http://chrome.360.cn/"target="_blank"class="lets-kill-ie6-a c360"title="360极速浏览器（chrome内核）"></a>'+
    '</div>'+
    '<div class="lets-kill-ie6-plugins">'+
        'LET\'S KILL IE6 for Wordpress'+
        '<a class="lets-kill-ie6-plugins-a"href="http://wordpress.org/extend/plugins/lets-kill-ie6/"target="_blank">这是什么插件？</a>'+
    '</div>'+
    '</div>'+
'</div>';
if ( !! window.ActiveXObject && !window.XMLHttpRequest) {
    document.write(killHtml);
    if (window.stop) window.stop();
    else document.execCommand("Stop")
};
