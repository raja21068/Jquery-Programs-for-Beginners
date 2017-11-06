$(document).ready(function(){
	var max_length = 55;
	$('#feedback').html(max_length + ' characters remaining');

	$('#textarea').keyup(function(){
		var count = $(this).val().length;
		var remain = max_length - count;
		$('#feedback').html(remain + ' characters remaining');

	});
		
});