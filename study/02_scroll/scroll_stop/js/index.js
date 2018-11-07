$(function(){
	// quick scroll
	
	var scrollSet = $("#quick").offset().top,
		fixedPos = $('#container').offset().top,
		calPos = ($("#wrap").height() + $("#header").height()+10) - ($("#quick").height() + $("#footer").height()+10);
	

	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		console.log(scrollTop);
				
		if (scrollTop > fixedPos) {
			$("#quick").css({position : "fixed", top : 0});
			if (scrollTop > calPos) {
				$("#quick").css({position : "absolute", top : calPos});			
			}
		} else if (scrollTop < fixedPos) {	
			$("#quick").css({position : "absolute", top : scrollSet});
		}
	});
	
});