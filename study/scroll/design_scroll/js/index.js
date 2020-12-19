$(function(){
	var dScroll = $(".d_scroll"),
		scrollCont = $(".scroll_cont .content"),
		scrollBar = $(".scroll_bar"),
		moveBar = scrollBar.find(".move_bar"),
		
		scrollContTop = parseInt(scrollCont.css("top")),
		moveBarTop = parseInt(moveBar.css("margin-top")),
		
		setPx = (scrollCont.height() / dScroll.height()).toFixed(2),			// 1.49
		setPer = dScroll.height() / scrollCont.height(),						// 0.6709956
		setBarSize = (dScroll.height() * setPer.toFixed(2)).toFixed(1),			// 207.7
		setLimit = dScroll.height() - setBarSize,								// 102.3xxxx
		barDefaultTop = scrollBar.offset().top,									// bar 초기 위치 값
		scrollValue = 0,														// bar 이동 한 값
		moveValue = dScroll.height() * 0.1;										// bar 1회 이동 값
		
	moveBar.css("height" , setBarSize);
	
	// wheel
	dScroll.on("mousewheel" , function(e,delta){
		//console.log(delta);
		delta < 0 ? moveBarTop += moveValue : moveBarTop -= moveValue;
		scrollEvent();
	});

	// keydown
	dScroll.on("mouseenter" , function(){
		$(document).on("keydown" , function(e){
			var keyCode = e.keyCode;
			if (keyCode == 40 || keyCode == 34){
				// down
				moveBarTop += moveValue;
			} else if (keyCode == 38 || keyCode == 33){
				// up
				moveBarTop -= moveValue;
			}
			scrollEvent();
		});
	}).mouseleave(function(){
		$(document).off("keydown");
	});
	
	// move bar
	moveBar.on("mousedown touchstart" , function(e){
		e.preventDefault();
		var startPos = moveBarTop,
			originPos = e.type != 'touchstart' ? e.pageY : e.originalEvent.touches[0].pageY;
		$(document).on("mousemove touchmove" , function (e) {
			var movePos = e.type != 'touchmove' ? e.pageY : e.originalEvent.touches[0].pageY;

			scrollValue = movePos - originPos;
			moveBarTop = startPos + scrollValue;
			scrollEvent();
		});
	});
	$(document).on('touchend mouseup',function(){
		$(document).off("touchmove").off("mousemove");
	});

	
	// scroll bar click
	$(".line").on("click" , function(e){
		scrollValue = e.pageY - barDefaultTop;
		if (moveBarTop > scrollValue){
			moveBarTop = scrollValue;
		} else {
			scrollValue = scrollValue - setBarSize;
			moveBarTop = scrollValue;
		}
		scrollEvent();
	});

	function scrollEvent(){
		if (moveBarTop > setLimit){
			moveBarTop = setLimit;
		} else if (moveBarTop < 0){
			moveBarTop = 0;
		}
		moveBar.css("margin-top" , moveBarTop);
		scrollCont.css("top" , -moveBarTop * setPx);
	}
});