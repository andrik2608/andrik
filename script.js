$(document).ready(function(){
	$('.link-popup').click(function(event){
		$('.popup').toggleClass('popup-active');
		$('body').toggleClass('lock');
		$('.popup_content').toggleClass('popup-content-active');
	});
});	
$(document).ready(function(){
	$('.popup__close').click(function(event){
		$('.popup').toggleClass('popup-active');
		$('body').toggleClass('lock');
		$('.popup_content').toggleClass('popup-content-active');
	});
});
$(document).ready(function(){
	$('.popup__area').click(function(event){
		$('.popup').toggleClass('popup-active');
		$('body').toggleClass('lock');
		$('.popup_content').toggleClass('popup-content-active');
	});
});		