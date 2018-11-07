$(function(){
	$(".ellipsis").each(function(){
		var el = $(this),
			text = el.html(),
			num = parseInt($(this).css("line-height")),
			viewLine = 2,
			calHeight = viewLine * num,
			t = $(this.cloneNode(true));
		$(this).height(calHeight);
		el.after(t);

		function height(){return t.height() > el.height()}

		while(text.length > 0 && height()){
			text = text.substr(0, text.length-1);
			t.html(text + "...");
		}
		
		el.html(t.html());
		t.remove();
	});
});