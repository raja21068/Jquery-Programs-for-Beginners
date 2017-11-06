$(document).ready(function(){
	$(".duplicate").live({
		click: function(){ $(this).after('<input type="button" class="duplicate" value="button" />');  }	
			
	});
});