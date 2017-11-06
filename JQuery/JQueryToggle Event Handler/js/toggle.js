$('#hideshow').toggle(function(){
	$(this).text('Show');
	$('#message').hide();
} , function(){
	$(this).text('Hide');
	$('#message').show();

});