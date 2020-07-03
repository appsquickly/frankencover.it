$(document).ready(function(){
$(".scroll").click(function(event){
//prevent the default action for the click event
event.preventDefault();
		
//get the full url - like mysitecom/index.htm#home
var full_url = this.href;
		
//split the url by # and get the anchor target name - home in mysitecom/index.htm#home
var parts = full_url.split("#");
var trgt = parts[1];
		
//get the top offset of the target anchor
var target_offset = $("#"+trgt).offset();
var target_top = target_offset.top;
		
//goto that anchor by setting the body scroll top to anchor top
$('html, body').animate({scrollTop:target_top}, 500);
});
});