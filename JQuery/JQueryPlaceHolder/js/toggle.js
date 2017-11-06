$(document).ready(function(){
	var default_value = 'Enter Email Here..';
	$('input[type="email"]').attr('value',default_value).focusin(function(){
		if($(this).val() == default_value){
			$(this).attr('value','');
		}
	}).blur(function(){
		if($(this).val() == ''){
			$(this).attr('value',default_value);
		}
	});
	
});