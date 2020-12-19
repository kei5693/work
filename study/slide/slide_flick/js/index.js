$(function(){
	var slide = $(".slide"),
		slideUl = slide.children("ul"),
		slideList = slideUl.children("li"),
		moveIdx = 0,
		moveLeft = 0,
		scrollValue = 0,
		setLimit = -(slideUl.width() * (slideList.length-1));
		
	slideList.each(function(i){
		$(this).css("left" , i * slideUl.width());
	});
	
	slide.on("mousedown touchstart" , function(e){
		e.preventDefault();
		
		var startPos = moveLeft,
			originPos = e.type != 'touchstart' ? e.pageX : e.originalEvent.touches[0].pageX;

		$(document).on("mousemove touchmove" , function (e) {
			var movePos = e.type != 'touchmove' ? e.pageX: e.originalEvent.touches[0].pageX;

			scrollValue = movePos - originPos;
			moveLeft = startPos + scrollValue;
			moveIdx = Math.floor(moveLeft / -slideUl.width());
			scrollEvent();
		});
	}).on('mouseup touchend', function(e){
		$(document).off("touchmove").off("mousemove");
		scrollAnimate();
	});

	$(window).resize(function(){
		/*
		console.log( moveIdx );
		setLimit = -(slideUl.width() * (slideList.length-1));
		
		slideList.each(function(i){
			$(this).css("left" , i * slideUl.width());
		});
		slideUl.css("left" , -moveIdx * slideUl.width() );
		*/
	});
	
	
	function chkMove(){
		if (moveLeft < 0){
			if (moveLeft < setLimit){
				moveLeft = setLimit;
			}
		} else {
			if (moveLeft > 0){
				moveLeft = 0;
			}
		}
	}
	
	function scrollEvent(){
		chkMove();
		slideUl.css("left" , moveLeft);
	}
	
	function scrollAnimate(){
		if (moveLeft < 0){
			moveNext();
		} else {
			movePrev();
		}
	}
	
	function moveNext(){
		if (scrollValue < -100){
			moveIdx++;
		}
		scrollValue = 0;
		moveLeft = -slideUl.width() * moveIdx;
		chkMove();
		slideUl.stop().animate({
			"left" : moveLeft
		});
	}
	
	function movePrev(){
		if (scrollValue > 100){
			moveIdx--;
		}
		scrollValue = 0;
		moveLeft = -slideUl.width() * moveIdx;
		chkMove();
		slideUl.stop().animate({
			"left" : moveLeft
		});
	}
});