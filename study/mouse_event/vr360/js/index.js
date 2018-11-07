$(window).load(function(){
	var moveIdx = 0,
		vrCont = $(".vr_cont"),
		vrWidth = vrCont.width(),
		vrLeft = vrCont.offset().left,
		
		imgList = 0,
		imgSum = 0,
		moveVal = 0,
		
		mouseLeft = 0,
		
		count = 120,
		chk = 0,
		value = 0;
	
	$(".act_num").text(moveIdx+1);
	$(".end_num").text(count);
	
	for (var i = 0; i < count; i++) {
		chk = i.toString().length;
		switch (chk) {
			case 1 : value = "00"+i;
					 break;
			case 2 : value = "0"+i;
					 break;
			default : value = i;
		}

		vrCont.append(
			$('<img />', {src : "img/Picanto_Green_00" + value +".jpg"}
		));
		$(".vr_cont > img").eq(0).addClass("on");
	}
		
	imgList = vrCont.find(">img");
	imgSum = vrCont.find(">img").length;
	moveVal = Math.floor(vrWidth / imgSum);
	
	// mousemove
	$(".vr_cont").on("mousemove" , function(e){
		mouseLeft = e.pageX - vrLeft;
		moveIdx = Math.floor(mouseLeft / moveVal);
		
		$.fn.vrEvent();
	});

	// btn
	$(".info > button").on("click" , function(){
		if ($(this).hasClass("next")) {
			if (moveIdx < imgSum-1) {
				moveIdx++;
			}
		} else {
			if (moveIdx > 0) {
				moveIdx--;
			}
		}
		$.fn.vrEvent();
	});

	// keyboard
	$(".info").mouseenter(function(){
		$(window).keydown(function(event){
			var keyEvent = event.keyCode;
			if (keyEvent == 39) {
			// key right
				if (moveIdx < imgSum-1) {
					moveIdx++;
				}
			} else if (keyEvent = 37) {
			// key left
				if (moveIdx > 0) {
					moveIdx--;
				}
			}
			
			$.fn.vrEvent();
		});
	}).mouseleave(function(){
		$(window).off("keydown");
	});
	
	// resize
	$(window).resize(function(){
		vrWidth = vrCont.width();
		vrLeft = vrCont.offset().left;
	});
	
	// vrEvent
	$.fn.vrEvent = function(){
		imgList.eq(moveIdx).addClass("on").siblings("img").removeClass("on");
		$(".act_num").text(moveIdx+1);
	}
	
});