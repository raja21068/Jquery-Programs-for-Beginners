$("#name").focusin(function(){

	$("#name_div").html("Enter your full name..");
});

$("#age").focusin(function(){

	$("#age_div").html("Enter your current age..");
});

$("#name").focusout(function(){

	$("#name_div").html("");
});

$("#age").focusout(function(){

	$("#age_div").html("");
});