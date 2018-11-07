$(function(){
	var $idx = 0,
		$thum = $(".img_gallery").find(".thum").find("ul"),
		$thumList = $thum.find("li"),
		$thumWidth = $thumList.size() * $thumList.innerWidth(),
		$view = 6,
		$last = $thumList.size()-1,
		$thumMove = $thumList.innerWidth() * ($view+1),
		$thumIdx = 0,
		$paging = Math.floor($last/$view),
		$imgSrc = 0,
		$imgAlt = 0,
		$bull_chk = false;
	
	// ul width set
	$thum.css("width",$thumWidth);
	// total num set
	$(".img_gallery .lastNum").text($thumList.size());
	
	$(".img_gallery .thum button").click(function(){
		// next
		if ($(this).hasClass("next")) {
			$thumIdx++;
			$thum.stop().animate({"margin-left" : "-="+$thumMove});
			$(".img_gallery .thum .mask").stop().animate({"margin-left" : "-="+$thumMove});
		} else {
		//prev
			$thumIdx--;
			$thum.stop().animate({"margin-left" : "+="+$thumMove});
			$(".img_gallery .thum .mask").stop().animate({"margin-left" : "+="+$thumMove});
		}
		
		// paging
		/*
		if ($thumIdx == $paging) {
			$(".img_gallery .thum .next").fadeOut();
		} else {
			$(".img_gallery .thum .next").fadeIn();
		}
		*/

		$(".img_gallery .thum .next")[($thumIdx == $paging ? "hide":"show")]();
		$(".img_gallery .thum .prev")[($thumIdx == $paging ? "show":"hide")]();

		/*
		$(".img_gallery .thum .next")["fade"+($thumIdx == $paging ? "Out":"In")]();
		$(".img_gallery .thum .prev")["fade"+($thumIdx == $paging ? "In":"Out")]();
		*/
		/*
		if ($thumIdx != 0) {
			$(".img_gallery .thum .prev").fadeIn();
		} else {
			$(".img_gallery .thum .prev").fadeOut();
		}
		*/
	});
	
	// img click
	$thumList.click(function(){
		$idx = $(this).index();
		$.fn.move();
	});

	// fn move
	$.fn.move = function () {
		// bull
		if ($bull_chk) {return;}
		$bull_chk = true;		
		
		$imgSrc = $thumList.eq($idx).children("img").attr("src");
		$imgAlt = $thumList.eq($idx).children("img").attr("alt");							
		
		// img change
		$(".img_gallery .visual .img img").before("<img src='" +$imgSrc+ "' alt='" +$imgAlt+ "' />");
		$(".img_gallery .visual .img img:last").fadeOut(function(){
			$(this).remove();
		});

		// txt change
		$(".img_gallery .visual .text .tit").html($imgAlt);
		$(".img_gallery .visual .firstNum").text($idx+1);
		
		// mask move
		$(".img_gallery .thum .mask").stop().animate({
			"left" : $idx * $thumList.innerWidth()
		},500,function(){
			$bull_chk = false;
		});
	}
});