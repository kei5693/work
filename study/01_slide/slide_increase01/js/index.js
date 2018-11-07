$(function(){
	var cuIndex = 0,
		list = $(".content_roll > ul > li"),
		list_sum = list.length,
		move = false;
	
	$(".content_roll > ul > li").each(function(i){
		$(this).css("left", 171 * i);
	});
	
	
	$(".content_roll > a").click(function(){
		if(move) {return;}
		move = true;
		 // btn move
		if ($(this).hasClass("next")) {
			
			if (cuIndex < list_sum-6) {
				cuIndex++;
				list.stop().animate({'left':'-=171'},500,function(){
					move = false;
				});
			};
		} else {
			if (cuIndex > 0) {
				cuIndex--;
				list.stop().animate({'left':'+=171'},500,function(){
					move = false;
				});
			}
		}
		
		// btn show / hide
		if (cuIndex == list_sum-6) {
			$(".next").fadeOut();
		} else {
			$(".next").fadeIn();
		}
		
		if (cuIndex == 0) {
			$(".prev").fadeOut();
		} else {
			$(".prev").fadeIn();
		}
	});
	
	$.fn.mEnter = (function(){
		list.mouseenter(function(){
			if(move) {return;}
			
			$(this).css("z-index" , 100).stop().animate({
				"padding" : 0,
				"width" : 204,
				"height" : 282
			},300);
			
		}).mouseleave(function(){
			if(move) {return;}
			
			$(this).stop().animate({
				"z-index" : 0,
				"padding" : 30 +" "+ 21,
				"width" : 161,
				"height" : 223
			},300);
			
		});
	});
	
	$.fn.mEnter();
});