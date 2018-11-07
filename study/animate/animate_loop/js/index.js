$(function(){
	$.fn.topBtn = function(){
		$.fn.baloonUp = function(){$('.topBtn').animate({'top':20},800, $.fn.baloonDown);};
		$.fn.baloonDown = function(){$('.topBtn').animate({'top':0},800,$.fn.baloonUp);};		
		$.fn.baloonUp();
	}
	$.fn.topBtn();
});