$(function(){
	var slide = $(".slide"),
		slideUl = slide.children("ul"),
		slideList = slideUl.children("li"),
		moveIdx = 0,
		moveLeft = 0,
		scrollValue = 0,
		setLimit = -(slideUl.width() * (slideList.length-1));
		
		//console.log(setLimit);
		
	slideList.each(function(i){
		$(this).css("left" , i * slideUl.width());
	});
	
	slide.on("mousedown" , function(e){
		e.preventDefault();
		
		var startPos = moveLeft,
			originPos = e.pageX;
			
			//console.log(startPos , originPos);
			
		$(document).on("mousemove" , function (e) {
			scrollValue = e.pageX - originPos;
			moveLeft = startPos + scrollValue;
			moveIdx = Math.floor(moveLeft / -slideUl.width());
			
			//console.log(moveLeft , scrollValue);
			
			scrollEvent();
		}).mouseup(function(){
			$(document).off("mousemove");

			console.log(moveLeft , scrollValue , moveIdx);
			scrollAnimate();
			
		});
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