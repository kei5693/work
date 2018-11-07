$(function(){
	$(".ex01").on('click', '> button', function(){
		for(var i=0; i <4; i++){
			$(".ex01 .result").append(i);
		}
	});
	
	$(".ex02").on('click', '> button', function(){
		for(i=1; i<=9; i++){
			$(".ex02 .result").append(i+"단<br>");
			
			for(j=1; j<=9; j++){
				$(".ex02 .result").append(i + "x" + j + "=" + i*j +"<br>");
			}
		}
	});
	
	$(".ex02_01").on('click', '> button', function(){
		var array = [1,2,3,4,5,6,7,8,9,10];
		for (property in array){
			$(".ex02_01 .result").append(array[property]+"<br>");
		}
	});
	
	$(".ex03").on('click', '> button', function(){
		var i = 0;
		while (i < 10){
			$(".ex03 .result").append(i);
			i++;
		}
	});
	
	$(".ex04").on('click', '> button', function(){
		var i = 10;
		do {
			$(".ex04 .result").append(i);
			i++;
		} while (i < 10);
	});
	
	$(".ex05").on('click', '> button', function(){
		for (var i = 1; i < 100; i++) {
			if (i == 15) {
				break;
			}
			$(".ex05 .result").append(i+"<br>");
		}
	});
	
	$(".ex06").on('click', '> button', function(){
		for (var i = 1; i < 10; i++) {
			if (i < 5) {
				continue;
			}
			$(".ex06 .result").append(i+"<br>");
		}
	});
	
	$(".ex07").on('click', '> button', function(){
		var btnText = $(this).text();
		switch (btnText) {
			case "1":
				$(".ex07 .result").append("number1"+"<br>");
				break;
			case "2":
				$(".ex07 .result").append("number2"+"<br>");
				break;
			case "3":
				$(".ex07 .result").append("number3"+"<br>");
				break;
			default:
				$(".ex07 .result").append("unknown"+"<br>");
		}
	});
	
	$(".ex08").on('click', '> button', function(){
		function myfunction(arg1, arg2) {
			var r = arg1 * arg2;
			return r;
		}
		$(".ex08 .result").append(myfunction(5,5));
	});
	
	$(".ex09").on('click', '.btn01', function(){
		var a = 1;
		function showNum(){
			var a;
			a = 2;
			$(".ex09 .result01").append(a+"<br>");
		}
		showNum();
		$(".ex09 .result01").append(a);
	});
	
	$(".ex09").on('click', '.btn02', function(){
		var a = 1;
		function showNum(){
			a = 2;
			$(".ex09 .result02").append(a+"<br>");
		}
		showNum();
		$(".ex09 .result02").append(a);
	});
	
	$(".ex10").on('click', '> button', function(){
		var ranNum = Math.floor(Math.random() * 10) +1;
		$(".ex10 .result").append(ranNum + "<br>");
	});
	
	$(".ex11").on('click', '> button', function(){
		var day = new Date(2016,0,1,0,0,0),
			now = new Date(),
			time = now.getTime() - day.getTime();
			result = Math.ceil(time / (24 * 60 * 60 * 1000));

		$(".ex11 .result").append(result + "<br>");
	});	
});
