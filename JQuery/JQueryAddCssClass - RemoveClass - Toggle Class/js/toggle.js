$("a").bind('mouseenter', function(){

	$(this).addClass('bold');
}).bind('mouseleave',function(){
	$(this).removeClass('bold');
});

$("p").bind('mouseenter mouseleave', function(){
	$(this).toggleClass('bold');
});