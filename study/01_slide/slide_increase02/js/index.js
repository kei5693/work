$(window).load(function(){
	var moveIndex = 0,
		arr = ["15%", "31%", "50%", "75%", "91%"],
		list = $(".visual > li"),
		bull_chk = false;
	
	// css left set
	$.each(arr, function(i, val){
		list.eq(i).css("left",val);
	});
	
	// size chk
	$(".content_roll .visual > li > a").each(function(){
		$(this).css({"width":$(this).find("img").width() , "height":$(this).find("img").height()});
	});
	
	
	$(".btn_paging > span a").click(function(){
		if ($(this).hasClass("on")) {
			return;
		} else {
			moveIndex = $(this).index();
			$(this).addClass("on").siblings("a").removeClass("on");
			
			/*
			if ($('.btn_control').hasClass("on")) {
				$('.btn_control').removeClass("on");
			}
			*/
			$.fn.rotate();
		}
	});
	
	$.fn.interval01 = (function(){
		intervalID = setInterval(function(){
			moveIndex = $(".visual > li.on").index();
			moveIndex++;
			if (moveIndex > list.length-1) {
				moveIndex = 0;
			}
			
			$(".visual > li").eq(moveIndex).addClass("on").siblings("li").removeClass("on");
			$(".btn_paging > span a").eq(moveIndex).addClass("on").siblings("a").removeClass("on");
			
			$.fn.rotate();
		}, 2000);
	});


	$.fn.interval01();
	
	$('.btn_control').click(function(){
		$(this).toggleClass('on');
		
		if($(this).hasClass('on')){
			 $(this).find('img').attr("alt",'재생');
			 clearInterval(intervalID);
		} else {
			$(this).find('img').attr("alt",'정지');
			$.fn.interval01();
		};
	});


	$(".btn_paging > span").mouseenter(function(){
		$('.btn_control').addClass("on").find('img').attr("alt",'재생');
		clearInterval(intervalID);
	}).mouseleave(function(){
		$('.btn_control').removeClass("on").find('img').attr("alt",'정지');
		$.fn.interval01();
	});

	$.fn.rotate = (function(){
		// bull
		if (bull_chk) {return;}
		bull_chk = true;
		
		list.removeClass().css({"opacity":"1","filter":"alpha(opacity=100)"}).stop().animate({"width":278,"height":278,"width":258,"height":258,"margin":"65px 0 0 -176px"},800,"easeOutCirc").find("span").hide().end().find("a,img").stop().animate({"width":258,"height":258},800,"easeOutCirc",function(){
			bull_chk = false;
			list.find("span").fadeIn();
		});
		
		// list animate set01
		list.each(function(index){
			if(index == moveIndex) {
				list.eq(moveIndex).addClass("on").stop().animate({"width":403,"height":403,"top":0,"margin":"0 0 0 -201px","left":arr[2]},800,"easeOutCirc").find("a,img").stop().animate({"width":383,"height":383},800,"easeOutCirc");
			} else if (index == moveIndex + 1 ) {
				list.eq(index).addClass('next').stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[3]},800,"easeOutCirc");
			} else if (index == moveIndex + 2 ) {
				list.eq(index).addClass('next2').css({"opacity":"0.7","filter":"alpha(opacity=70)"}).stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[4]},700,"easeOutCirc");				
			} else if (index == moveIndex - 1 ) {
				list.eq(index).addClass('prev').stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[1]},800,"easeOutCirc");				
			} else if (index == moveIndex - 2) {
				list.eq(index).addClass('prev2').css({"opacity":"0.7","filter":"alpha(opacity=70)"}).stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[0]},800,"easeOutCirc");				
			}
		});
		
		// list animate set02
		if (moveIndex == 0) {
			list.eq (list.length -1).addClass('prev').stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[1]},800,"easeOutCirc");
			list.eq (list.length -2).addClass('prev2').css({"opacity":"0.7","filter":"alpha(opacity=70)"}).stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[0]},800,"easeOutCirc");
		} else if (moveIndex == 1) {
			list.eq(list.length -1).addClass('prev2').css({"opacity":"0.7","filter":"alpha(opacity=70)"}).stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[0]},800,"easeOutCirc");
		} else if (moveIndex == list.length - 1){
			list.eq(0).addClass('next').stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[3]},800,"easeOutCirc");
			list.eq(1).addClass('next2').css({"opacity":"0.7","filter":"alpha(opacity=70)"}).stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[4]},700,"easeOutCirc");
		} else if (moveIndex == list.length - 2){
			list.eq(0).addClass('next2').css({"opacity":"0.7","filter":"alpha(opacity=70)"}).stop().animate({"width":278,"height":278,"margin":"65px 0 0 -176px","left":arr[4]},700,"easeOutCirc");
		}
	});
});