$(document).ready(function(){
	$('#search_bar').keyup(function(){
		var text = $(this).val();
		$('#list li').removeClass('highlight');
		if(jQuery.trim(text) != ''){
			$("#list li:contains('"+text+"')").addClass('highlight');
		}
	});
});