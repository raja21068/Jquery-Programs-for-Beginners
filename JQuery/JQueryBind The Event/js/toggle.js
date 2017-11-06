$("a").bind('mouseenter', function(){

	$(this).addClass('bold');
}).bind('mouseleave',function(){
	$(this).removeClass('bold');
});