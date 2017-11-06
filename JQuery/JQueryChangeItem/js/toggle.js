$("#list").change(function(){
	var value= $("#list").val();
	$("#feedback").html('You have selected : ' +value);
});