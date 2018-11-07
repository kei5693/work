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
	
	
	//
	$(".ex03 .btn01").on('click', clickAlert);
	$(".ex03 .btn02").on('click', function(){
		alert("off");
		$(".ex03 .btn01").off('click', clickAlert);
	});
	$(".ex03 .btn03").on('click', function(){
		alert("on");
		$(".ex03 .btn01").on('click', clickAlert);
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
	$(".ex05 .link03").on("click",function(){
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
	$(".ex06 .enter_leave").on("mouseenter",function(e){
		alert("mouseenter");
	}).mouseleave(function(){
		alert("mouseleave");
	});

	$(".ex06 .wheel").on('mousewheel DOMMouseScroll', function(e){
    	e.preventDefault();
        
        var E = e.originalEvent;
        delta = 0;

        E.detail ? delta = E.detail : delta = E.wheelDelta;
        // ff의 경우 detail을 사용, 나머지는 wheelDelta를 사용
		// wheelDelta의 경우 down은 -120, up의 경우 120을 반환
		// detail 경우 down은 3, up의 경우 -3을 반환하기에 값을 맞추기 위에 * -40을 추가
		
        delta < 0 ? alert("down : " + delta) : alert("up : " + delta);
    });
});
