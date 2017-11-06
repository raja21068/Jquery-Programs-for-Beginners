function change_font(element , size){
	var test = element.css('font-size');
	var current = parseInt(element.css('font-size'));
	if(size == 'bigger'){
		var size = current + 2;
	}
	else if(size == 'smaller'){
		var size = current - 2;
	}
	element.css('font-size',size + 'px');	
}

$('#smaller').click(function(){
	change_font($('p'), 'smaller');
});

$('#bigger').click(function(){
	change_font($('p'),'bigger');
});