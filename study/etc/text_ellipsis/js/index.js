;(function($){
	$.fn.ellipsis = function(option){
		var opts = $.extend({}, $.fn.ellipsis.default, option);

		return this.each(function(){
			var el = $(this),
				text = el.html(),
				num = parseInt($(this).css("line-height")),
				calHeight = opts.viewLine * num;

			// width 옵션 있을 경우
			if(opts.width){el.width(opts.width)}
			t = el.clone();
			el.height(calHeight).after(t);
			function height(){return t.height() > el.height()}

			for(var i = text.length; i > 0 && height(); i--){
				// 마지막 공백 제거
				text = text.substr(0,i).replace(/(^\s*)|(\s*$)/gi, "");
				t.html(text + "...");
			}

			el.html(t.html()).css("height", "");
			t.remove();
		});
	}

	$.fn.ellipsis.default = {
		viewLine : 2
	}
})(jQuery);