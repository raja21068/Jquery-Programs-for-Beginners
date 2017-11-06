$("#text_area").scroll(function(){
	var position = $("#text_area").scrollTop();
	$("#eventCheck").html("You have scrolled.."+position);
});
