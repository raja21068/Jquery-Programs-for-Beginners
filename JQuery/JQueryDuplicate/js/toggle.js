$(document).ready(function(){
	$(".duplicate").click(function(){
		$(this).after("<input type='button' value='button1'>");
	});
});