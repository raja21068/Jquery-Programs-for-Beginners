$("#user_text").keyup(function(){
	var user_text = $("#user_text").val();
	$("#feedback").html(user_text);
});
//keydown()