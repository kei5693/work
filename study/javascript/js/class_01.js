$(function(){
	$(".ex01 .btn01").click(function(){
		alert("1");
	});
	$(".ex01 .btn02").on('click', function(){
		alert("2");
	});
	$(".ex01 .btn03 a").click(function(){
		alert("3");
	});
	$(".ex01 .btn04").on('click', 'a', function(){
		alert("4");
	});
	
	
	//
	$(".ex02 .btn_add").click(function(){
		var html = "<button class='alert'>추가버튼</button>";
		$(".ex02 .add_box").append(html);
	});
	$(".ex02 .alert").click(function(){
		alert(1);
	});
	$(".ex02 .btn_add02").on('click', function(){
		var html = "<button class='alert02'>추가버튼2</button>";
		$(".ex02 .add_box02").append(html);
	});
	$(".ex02").on('click', '.alert02', function(){
		alert(2);
	});
	
	
	//
	$(".ex03 .click1").on('click', clickAlert);
	$(".ex03 .off").on('click', function(){
		$(".ex03 .click1").off('click', clickAlert);
	});
	$(".ex03 .on").on('click', function(){
		$(".ex03 .click1").on('click', clickAlert);
	});
	
	function clickAlert(){
		alert("click");
	}
	
	
	//
	$(".ex04 .div").on("click",function(){
		alert("div");
	});
	$(".ex04 .p").on("click",function(){
		alert("p");
	});
	$(".ex04 .span01").on("click",function(){
		alert("span01");
	});
	$(".ex04 .span02").on("click",function(e){
		e.stopPropagation();
		alert("span02");
	});
	
	
	//
	$(".ex05 .link03").on("click",function(e){
		e.preventDefault();
		alert("preventDefault");
	});
	$(".ex05 .link04").on("click",function(){
		alert("return false");
		return false;
	});
	
	// 
	$(".ex06 .click").on("click",function(){
		alert("click");
	});
	$(".ex06 .dblclick").on("dblclick",function(e){
		alert("dblclick");
	});
	
	$(".ex06 .mouse01").on("mouseenter",function(e){
		$(".ex06 .mouse01 p").text("mouseenter");
	}).mouseleave(function(){
		$(".ex06 .mouse01 p").text("mouseleave");
	});

	$(".ex06 .mouse02").mousedown(function(){
		$(".ex06 .mouse02 p").text("mousedown");
		$(".ex06 .mouse02").mousemove(function(){
			$(".ex06 .mouse02 p").text("mousemove");
		});
	}).mouseup(function(){
		$(".ex06 .mouse02").off("mousemove");
		$(".ex06 .mouse02 p").text("mouseup");
	});
	
	$(".ex06 .wheel").on('mousewheel DOMMouseScroll', function(e){
    	e.preventDefault();
        
        var E = e.originalEvent;
        delta = 0;

        E.detail ? delta = E.detail * -40 : delta = E.wheelDelta;
        // ff의 경우 detail을 사용, 나머지는 wheelDelta를 사용
		// wheelDelta의 경우 down은 -120, up의 경우 120을 반환
		// detail 경우 down은 3, up의 경우 -3을 반환하기에 값을 맞추기 위에 * -40을 추가
		
        delta < 0 ? alert("down : " + delta) : alert("up : " + delta);
    });
	
	$(".ex06 .keyboard input").on('keydown', function(e){
		$(".ex06 .keyboard span").text(e.keyCode);
	}); // 어떤 키를 눌렀는지 확인 할 수 있다.
	
	//
	$(".ex07 .scroll01 > div").scrollTop(300).scrollLeft(200);
	
	$(".ex07 .scroll02 > div").scroll(function(){
		var scrollTop = $(this).scrollTop();
		$(".ex07 .scroll02 > p").text(scrollTop); // 스크롤을 하면 스크롤 Y축의 값을 출력한다.
		
		// 스크롤 값 300을 기준으로 분기
		if(scrollTop < 300){
			$(".ex07 .scroll02 .offset").text("off");
		} else {
			$(".ex07 .scroll02 .offset").text("on");
		}
	});
		
	$(".ex07").on("click", 'button', function(){
		$(".ex07 span").animate({"margin-left" : "200px"},1000,function(){
			$(".ex07 span").text("이벤트 종료");
		});
	});
	
	$(".ex08").on("click", '.set_timeout > button', function(){
		setTimeout(function(){
			alert("Hello");
		}, 2000);
	});
	
	
	var interval = null,
		num = 0;
	function intervalFunc(){
		interval = setInterval(function(){
			num++;
			$(".ex08 .count").text(num);
		}, 100);
	}
		
	$(".ex08").on("click", '.set_interval .start', function(){
		intervalFunc();
	});
	
	$(".ex08").on("click", '.set_interval .stop', function(){
		clearInterval(interval);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
