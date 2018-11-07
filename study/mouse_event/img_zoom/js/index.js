$(window).load(function(){
	var $view01 = $(".view01"),
		$view02 = $(".view02"),
		
		$view01Img = $view01.find("img"),
		$view01ImgSrc = $view01Img.attr("src"),
		$view02Img = $view02.find("img"),
		
		$imgWidth01 = $view01Img.width(),
		$imgHeight01 = $view01Img.height(),
		
		$imgPos01 = 0,
		$imgPos02 = 0,
		
		$lensWidth = $(".lens").outerWidth(),
		$maxLeft = $imgWidth01 - $lensWidth,
		$maxTop = $imgHeight01 - $lensWidth,
		
		$wrapTop = $view01.offset().top + $lensWidth/2,
		$wrapLeft = $view01.offset().left + $lensWidth/2,
		
		$mouseTop = 0,
		$mouseLeft = 0
		$move = [];
		
	// img type chk
	if ($imgWidth01 > $imgHeight01) {
		// horizontal img
		$imgPos01 = Math.floor($view01.height() - $view01Img.height())/2;
		
		$view01Img.closest(".wrap").css({"margin-top" : $imgPos01 , "height" : $imgHeight01});
	} else {
		// vertical img
		$view01Img.addClass("vertical");
		
		$imgWidth01 = $view01Img.width();
		$imgHeight01 = $view01Img.height();
		
		$maxLeft = $imgWidth01 - $lensWidth;
		$maxTop = $imgHeight01 - $lensWidth;
		
		$imgPos02 = Math.floor($view01.width() - $view01Img.width())/2;
		
		$wrapTop = $view01.offset().top + $lensWidth/2;
		$wrapLeft = $view01.offset().left + $lensWidth/2 + $imgPos02;

		$view01Img.closest(".wrap").css("width" , $imgWidth01);
	}
	
	// mouse evt
	$(".view01 .wrap").mousemove(function(e){
		if ($imgWidth01 > $imgHeight01) {
			// horizontal img
			$mouseTop = e.pageY - $imgPos01;
		} else {
			// vertical img
			$mouseTop = e.pageY;
		}
		
		$mouseLeft = e.pageX;
		$move = [$mouseTop - $wrapTop, $mouseLeft - $wrapLeft];
		
		// left control
		if ($move[1] < 0) {
			$move[1] = 0;
		} else if ($move[1] > $maxLeft) {
			$move[1] = $maxLeft;
		}
		
		// top control
		if ($move[0] < 0) {
			$move[0] = 0;
		} else if ($move[0] > $maxTop) {
			$move[0] = $maxTop;
		}
		
		// move info
		$(".mouse_top").text($move[0]);
		$(".mouse_left").text($move[1]);
		
		// lens move
		$(".lens").css({"top" : $move[0] , "left" : $move[1]});
		// view02 move
		$view02Img.css({"top" : -$move[0] * 3, "left" : -$move[1] * 3});
	});
	
	// mouse enter
	$view01.find(".wrap").mouseenter(function(){
		$view02.fadeIn();
		$(".lens").show();
	}).mouseleave(function(){
		$view02.fadeOut();
		$(".lens").hide();
	});
	
	// view02 resize
	$view02Img.attr("src",$view01ImgSrc).css({"width" : $imgWidth01 * 3 , "height" : $imgHeight01 * 3});
	
	// img info
	$(".img_w").text($imgWidth01);
	$(".img_h").text($imgHeight01);
});