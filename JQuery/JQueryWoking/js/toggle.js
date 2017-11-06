$('.hover').mousemove(function(e){
	var msg = $(this).attr('hovertext');
	$('#hoverdiv').text(msg);
	$('#hoverdiv').show();
	$('#hoverdiv').css('top', e.clientY+10).css('left', e.clientX+10);
}).mouseout(function(){
	$('#hoverdiv').hide();
});